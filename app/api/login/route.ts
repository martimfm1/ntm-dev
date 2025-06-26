// app/api/login/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
  const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;
  
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_type=code&scope=identify`;

  return NextResponse.redirect(discordAuthUrl);
}
