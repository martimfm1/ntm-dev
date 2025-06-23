"use client";

import { Button } from "./button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-[90%] max-w-3xl">
      <div className="flex items-center gap-3">
        <Image
          src="/favicon.png"
          alt="Logo da NTM DEV"
          width={40}
          height={40}
          priority
        />
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center gap-3">
        <Button variant="link">
          <a href="#home" className="text-amber-50 font-medium">
            Home
          </a>
        </Button>
        <Button variant="link">
          <a href="#bots" className="text-amber-50 font-medium">
            Bots
          </a>
        </Button>
        <Button variant="link">
          <a href="#avaliacoes" className="text-amber-50 font-medium">
            Reviews
          </a>
        </Button>
        <Button variant="link">
          <a href="#faq" className="text-amber-50 font-medium">
            FAQ
          </a>
        </Button>
      <Button variant='secondary'>
        <a href="/discord/login" className=" text-slate-950 font-medium">
          Sign In
        </a>
      </Button>
      </div>

      {/* Botão Hamburger (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-amber-50">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-white/10 backdrop-blur-md rounded-xl py-4 px-6 flex flex-col items-start md:hidden">
          <a href="#home" className="text-amber-50 py-1" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#bots" className="text-amber-50 py-1" onClick={() => setIsOpen(false)}>Bots</a>
          <a href="#avaliacoes" className="text-amber-50 py-1" onClick={() => setIsOpen(false)}>Reviews</a>
          <a href="#faq" className="text-amber-50 py-1" onClick={() => setIsOpen(false)}>FAQ</a>
          <a href="/discord/login" className="text-amber-50 pt-2 font-semibold" onClick={() => setIsOpen(false)}>Sign In</a>
        </div>
      )}
    </nav>
  );
}
