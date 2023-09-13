import { NextRequest, NextResponse } from "next/server";
import { User } from "@domain";
import { NextConfig } from "next";

export default function middleware(request: NextRequest) {
  var token = request.cookies.get("token");
  var userStorage = request.cookies.get("user");

  console.log(userStorage);

  if (!userStorage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  var user = JSON.parse(userStorage?.value) as User;

  console.log(user);

  if (!user.isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const response = NextResponse.next();

  return response;
}

// export function middleware(req: NextRequest, res: NextResponse) {
//   //return NextResponse.redirect(new URL("/home", res.url));
//   console.log("Middleware chamado");

//   return res;
// }

export const config = {
  matcher: ["/dashboard/:path*"],
};
