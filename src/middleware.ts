import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  request.cookies.clear();
}

export const config = {
  matcher: "/api/:path*",
};
