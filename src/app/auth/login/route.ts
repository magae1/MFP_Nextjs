import { NextResponse } from "next/server";
import { zfd } from "zod-form-data";
import jwt_decode from "jwt-decode";

import { TObtainPair, TTokenPayload } from "@/app/_libs/types";

const loginSchema = zfd.formData({
  identifier: zfd.text(),
  password: zfd.text(),
});

export async function POST(request: Request) {
  const loginFormData = loginSchema.safeParse(await request.json());

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
  const refreshTokenPayload: TTokenPayload = jwt_decode(tokens.refresh);
  const accessTokenPayload: TTokenPayload = jwt_decode(tokens.access);
  const header = new Headers();
  header.append(
    "Set-Cookie",
    `access=${tokens.access}; Max-Age=${
      accessTokenPayload.exp - accessTokenPayload.iat
    }; HttpOnly; Path=/`,
  );
  header.append(
    "Set-Cookie",
    `refresh=${tokens.refresh}; Max-Age=${
      refreshTokenPayload.exp - refreshTokenPayload.iat
    }; HttpOnly; Path=/`,
  );

  return new Response(
    JSON.stringify({ message: "성공적으로 로그인됐습니다." }),
    {
      status: 200,
      headers: header,
    },
  );
}
