import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

import { authMiddleware, dashboardMiddleware } from "@middlewares";

export default withAuth(
  async function middleware(req) {
    const path = req.nextUrl.pathname;

    if (path.startsWith("/dashboard")) {
      return await dashboardMiddleware(req);
    }

    if (path.startsWith("/auth")) {
      return await authMiddleware(req);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
