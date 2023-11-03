import { NextRequest, NextResponse } from "next/server";
import { authMiddleware, dashboardMiddleware } from "@middlewares";

export default function middleware(
  request: NextRequest
): Promise<NextResponse> {
  if (request.url.includes("/dashboard")) {
    return dashboardMiddleware(request);
  }

  if (request.url.includes("/auth")) {
    return authMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};

//TODO: VERIRIFICAR SE AS INFOS DO COOKIES, SE AINDA SÃO DE FATO AS MESMAS QUE DEVERIAM SER E SE O USUARIO AINDA ESTA LOGADO JÁ NA API
