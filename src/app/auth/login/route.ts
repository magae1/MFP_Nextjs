import { NextResponse } from "next/server";
import { zfd } from "zod-form-data";

import { TObtainPair } from "@/app/_libs/types";
import { accessCookie, refreshCookie } from "@/app/_libs/cookies";

const loginSchema = zfd.formData({
  identifier: zfd.text(),
  password: zfd.text(),
});

export async function POST(request: Request) {
  const loginFormData = loginSchema.safeParse(await request.json());

  if (!loginFormData.success)
    return NextResponse.json(
      { message: "잘못된 요청입니다." },
      { status: 400 },
    );

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormData.data),
  });

  if (!res.ok) return res;

  const tokens: TObtainPair = await res.json();
  let response = new NextResponse();
  response = refreshCookie(tokens.refresh, response);
  response = accessCookie(tokens.access, response);
  return response;
}
