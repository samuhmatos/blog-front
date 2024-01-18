import { NextResponse } from "next/server";
import { NextRequestWithAuth } from "next-auth/middleware";

const errorMessage = "Você já está conectado em uma conta!";

export async function authMiddleware(
  request: NextRequestWithAuth
): Promise<NextResponse> {
  let url = request.url;
  const user = request.nextauth.token;

  if (user) {
    return NextResponse.redirect(
      new URL(`/?error_message=${errorMessage}`, url)
    );
  }

  return NextResponse.next();
}
