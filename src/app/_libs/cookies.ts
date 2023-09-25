import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

import { TTokenPayload } from "@/app/_libs/types";

export function accessCookie(accessToken: string, response: NextResponse<any>) {
  const accessTokenPayload: TTokenPayload = jwt_decode(accessToken);
  response.cookies.set("access", accessToken, {
    path: "/",
    expires: dayjs.unix(accessTokenPayload.exp).subtract(5, "minute").toDate(),
  });
  return response;
}

export function refreshCookie(
  refreshToken: string,
  response: NextResponse<any>,
) {
  const refreshTokenPayload: TTokenPayload = jwt_decode(refreshToken);
  response.cookies.set("refresh", refreshToken, {
    path: "/auth",
    expires: dayjs.unix(refreshTokenPayload.exp).toDate(),
    httpOnly: true,
  });
  return response;
}
