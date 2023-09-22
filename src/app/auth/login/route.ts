import { NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import jwt_decode from "jwt-decode";

const loginSchema = zfd.formData({
  identifier: zfd.text(),
  password: zfd.text(),
});

type TObtainPair = {
  access: string;
  refresh: string;
};

type TRefreshTokenPayload = {
  token_type: string;
  exp: number;
  iat: number;
  jit: string;
  account_identifier: string;
};

export async function POST(request: Request) {
  const loginFormData = loginSchema.safeParse(await request.formData());

  if (!loginFormData.success) return NextResponse.json(null, { status: 400 });

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login/`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormData.data),
  });

  if (!res.ok)
    return NextResponse.json("계정을 찾을 수 없습니다.", { status: 401 });

  const tokens: TObtainPair = await res.json();
  const tokenPayload: TRefreshTokenPayload = jwt_decode(tokens.refresh);
  return new Response(JSON.stringify({ access: tokens.access }), {
    status: 200,
    headers: {
      "Set-Cookie": `refresh=${tokens.refresh}; Expires=${tokenPayload.exp}; HttpOnly`,
    },
  });
}
