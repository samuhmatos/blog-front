import { NextRequest, NextResponse } from "next/server";
const errorMessage = "Você já está conectado em uma conta!";

export function authMiddleware(request: NextRequest): NextResponse {
  let url = request.url;

  var userStorage = request.cookies.get("user");

  if (userStorage) {
    return NextResponse.redirect(
      new URL(`/?error_message=${errorMessage}`, url)
    );
  }

  return NextResponse.next();
}
