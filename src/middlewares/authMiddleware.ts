import { NextRequest, NextResponse } from "next/server";
const errorMessage = "Você já está conectado em uma conta!";

export function authMiddleware(request: NextRequest): NextResponse {
  let url = request.url;

  var tokenStorage = request.cookies.get("token");

  if (tokenStorage) {
    return NextResponse.redirect(
      new URL(`/?error_message=${errorMessage}`, url)
    );
  }

  return NextResponse.next();
}
