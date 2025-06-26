import { NextResponse } from "next/server";
import { parse } from "cookie";

export async function GET(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  const discordUser = cookies["discord_user"];

  if (!discordUser) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  let user;
  try {
    user = JSON.parse(discordUser);
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, user });
}
