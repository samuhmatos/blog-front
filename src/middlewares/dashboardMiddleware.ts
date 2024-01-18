import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export async function dashboardMiddleware(
  req: NextRequestWithAuth
): Promise<NextResponse> {
  const url = req.url;
  const user = req.nextauth.token;

  if (!user || !user.user.isAdmin) {
    return NextResponse.redirect(new URL("/", url));
  }

  return NextResponse.next();
}
