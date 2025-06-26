"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Variants, Transition } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ username: string; avatar: string } | null>(
    null
  );

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const data = await res.json();
      setUser(data.user);
    };
    fetchUser();
  }, []);

  const customVariants: Variants = {
    initial: {
      scale: 0.9,
      filter: "blur(10px)",
      y: "100%",
    },
    animate: {
      scale: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const customTransition: Transition = {
    type: "spring",
    bounce: 0,
    duration: 0.4,
  };

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-10 bg-white/10 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-[100%] max-w-3xl">
      <div className="flex items-center gap-3 flex-shrink-0">
        <Image
          src="/favicon.png"
          alt="Logo da NTM DEV"
          width={48}
          height={48}
          priority
        />
      </div>

      <div className="hidden md:flex items-center gap-3 flex-grow justify-center">
        <Button variant="link">
          <Link href="/" className="text-slate-200 font-medium">
            Home
          </Link>
        </Button>
        <Button variant="link">
          <Link href="/products" className="text-slate-200 font-medium">
            Products
          </Link>
        </Button>
        <Button variant="link">
          <Link href="#reviews" className="text-slate-200 font-medium">
            Reviews
          </Link>
        </Button>
        <Button variant="link">
          <Link href="#faq" className="text-slate-200 font-medium">
            FAQ
          </Link>
        </Button>
      </div>
      <div className="hidden md:flex items-center">
        {user ? (
          <Dialog variants={customVariants} transition={customTransition} className="text-amber-50">
            <DialogTrigger>
              <Link href="">
                <Image
                  src={user.avatar}
                  alt={user.username}
                  width={36}
                  height={36}
                  className="rounded-full border border-white hover:opacity-80 transition"
                />
              </Link>
            </DialogTrigger>
            <DialogContent className="w-full max-w-md bg-stone-950/70 backdrop:blur-xs">
              <DialogHeader>
                <DialogTitle className="text-amber-50 dark:text-white p-4 titulo">
                  Account
                </DialogTitle>
              </DialogHeader>
              <div className="w-30 flex flex-col space-y-4 p-5">
                <Button variant="destructive" className="cursor-pointer">
                  <a href="" className="titulo">Logout</a>
                </Button>
              </div>
              <DialogClose className="cursor-pointer !text-amber-50"/>
            </DialogContent>
          </Dialog>
        ) : (
          <Button variant="signin">
            <a href="/api/login" className="text-slate-950 font-medium">
              Sign In
            </a>
          </Button>
        )}
      </div>

      <div className="md:hidden flex-shrink-0">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-white/10 backdrop-blur-md rounded-xl py-4 px-6 flex flex-col items-start md:hidden">
          <Link
            href="#home"
            className="text-slate-200 py-1"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#bots"
            className="text-slate-200 py-1"
            onClick={() => setIsOpen(false)}
          >
            Bots
          </Link>
          <Link
            href="#avaliacoes"
            className="text-slate-200 py-1"
            onClick={() => setIsOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="#faq"
            className="text-slate-200 py-1"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/discord/login"
            className="text-slate-200 pt-2 font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
