import { NextRequest, NextResponse } from "next/server";
export function dashboardMiddleware(request: NextRequest): NextResponse {
  var token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
