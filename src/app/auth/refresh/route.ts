import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { accessCookie, refreshCookie } from "@/app/_libs/cookies";
import { TRefresh } from "@/app/_libs/types";

export async function POST(request: Request) {
  const cookiesStore = cookies();
  const refreshToken = cookiesStore.get("refresh");

  if (!refreshToken)
    return NextResponse.json(
      { message: "갱신 토큰이 존재하지 않습니다." },
      { status: 400 },
    );

  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken.value }),
  });

  if (!res.ok) return res;

  const token: TRefresh = await res.json();
  let response = new NextResponse(JSON.stringify(token), {});
  response = accessCookie(token.access, response);
  return response;
}
