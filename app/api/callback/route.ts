import { NextResponse } from "next/server";
import { parse, serialize } from "cookie";

const CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET!;
const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI!;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  // Trocar code por token
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
  });

  const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!tokenResponse.ok) {
    return NextResponse.json({ error: "Failed to get token" }, { status: 500 });
  }

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  // Buscar dados do usuário
  const userResponse = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (!userResponse.ok) {
    return NextResponse.json({ error: "Failed to get user" }, { status: 500 });
  }

  const userData = await userResponse.json();
  const { id, username, avatar, discriminator } = userData;

  const avatarUrl = avatar
    ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`
    : `https://cdn.discordapp.com/embed/avatars/${parseInt(discriminator) % 5}.png`;

  // Guardar user no cookie
  const cookieSerialized = serialize(
    "discord_user",
    JSON.stringify({ username, avatar: avatarUrl }),
    {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      httpOnly: false,
      sameSite: "lax",
    }
  );

  // Usar URL absoluta no redirect
  const response = NextResponse.redirect(BASE_URL);

  response.headers.append("Set-Cookie", cookieSerialized);

  return response;
}
