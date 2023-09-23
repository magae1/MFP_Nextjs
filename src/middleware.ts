import { NextRequest, NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

import { TTokenPayload } from "@/app/_libs/types";
import dayjs from "dayjs";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  let accessTokenCookie = request.cookies.get("access");
  let refreshTokenCookie = request.cookies.get("refresh");

  const requestHeaders = new Headers();
  if (accessTokenCookie) {
    let accessToken = accessTokenCookie.value;
    const accessTokenPayload: TTokenPayload = jwt_decode(accessToken);

    const expiredTime = dayjs.unix(accessTokenPayload.exp);
    const now = dayjs().subtract(1, "minute");

    if (now.isAfter(expiredTime)) {
      const res = await fetch(`${process.env.BACKEND_URL}/api/auth/refresh/`, {
        body: JSON.stringify({ refresh: refreshTokenCookie?.value }),
      });

      if (!res.ok) return res;
      accessToken = await res.json().then((data) => data.access);
    }

    requestHeaders.set("Authorization", `Bearer ${accessToken}`);
  }
}
