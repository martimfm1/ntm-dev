'use client';
import { useEffect, useState } from 'react';

export default function WelcomePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  if (!user) return <p className="text-white text-center mt-20">A carregar...</p>;

  return (
    <div className="text-white text-center mt-20">
      <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h1 className="text-3xl font-bold">Bem-vindo, {user.username}!</h1>
    </div>
  );
}
