// app/api/discord/login/route.ts
import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;

export async function GET() {
  const url = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_type=code&scope=identify`;

  return NextResponse.redirect(url);
}
