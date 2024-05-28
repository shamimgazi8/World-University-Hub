import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { isAuthenticated } from "./helpers/lib/auth";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("userToken");

  const isLogged = isAuthenticated(cookie ? cookie.value : "");

  if (!isLogged) {
    if (request.nextUrl.pathname.startsWith("/user")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (request.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    } else if (request.nextUrl.pathname.startsWith("/signup")) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    } else if (request.nextUrl.pathname.startsWith("/verify-otp")) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    } else if (request.nextUrl.pathname.startsWith("/forgot-password")) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    } else if (request.nextUrl.pathname.startsWith("/reset-password")) {
      return NextResponse.redirect(new URL("/user/dashboard", request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/user/:path*",
    "/login",
    "/signup",
    "/verify-otp",
    "/forgot-password",
    "/reset-password",
  ],
};
