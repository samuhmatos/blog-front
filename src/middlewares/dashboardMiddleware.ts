import { NextRequest, NextResponse } from "next/server";
export async function dashboardMiddleware(
  request: NextRequest
): Promise<NextResponse> {
  var token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
