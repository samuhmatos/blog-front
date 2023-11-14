import { getCookie } from "cookies-next";
import { NextRequest, NextResponse } from "next/server";
import { fsUtils } from "../../../utils/fsUtils";

const sessionPath = "./src/infra/session.json";

export async function GET(request: NextRequest) {
  var token = getCookie("token");

  if (!token) {
    const session = await fsUtils.read<{ token: string }>(sessionPath);
    return NextResponse.json(session);
  }

  return Response.json({ token });
}

export async function POST(request: NextRequest) {
  const session = { token: request.cookies.get("token")?.value };

  await fsUtils.write(sessionPath, session);

  return NextResponse.json({});
}

export async function DELETE(request: NextRequest) {
  const session = { token: null };

  await fsUtils.write(sessionPath, session);

  return NextResponse.json({});
}
