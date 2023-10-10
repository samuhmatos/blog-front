import { NextRequest, NextResponse } from "next/server";
import { User } from "@domain";

export default function middleware(request: NextRequest) {
  var token = request.cookies.get("token");
  var userStorage = request.cookies.get("user");

  if (!userStorage || !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  var user = JSON.parse(userStorage?.value) as User;

  if (!user.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
