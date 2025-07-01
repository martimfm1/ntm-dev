// app/api/logout/route.ts
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET() {
  const response = NextResponse.redirect(BASE_URL);

  response.cookies.set("discord_user", "", {
    path: "/",
    maxAge: 0,
    httpOnly: false,
    sameSite: "lax",
  });

  return response;
}
