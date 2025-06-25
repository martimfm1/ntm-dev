'use client';
import { useEffect } from 'react';

export default function DiscordLoginPage() {
  useEffect(() => {
    window.location.href = 'https://discord.com/oauth2/authorize?...';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-950 text-amber-50">
      <p>A redirecionar para o Discord...</p>
    </div>
  );
}
