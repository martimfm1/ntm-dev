"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import {
  Menu,
  X,
  House,
  Star,
  Bot,
  MessageCircle,
  CircleUser,
} from "lucide-react";
import {
  Dialog,
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
    <nav className="fixed top-5 inset-x-5 md:left-1/2 md:-translate-x-1/2 z-10 bg-white/10 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex items-center justify-between w-[calc(100%-2.5rem)] md:w-[100%] max-w-3xl">
      {/* Logo */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <Image
          src="/favicon.png"
          alt="Logo da NTM DEV"
          width={48}
          height={48}
          priority
        />
      </div>

      {/* Menu desktop */}
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

      {/* User desktop */}
      <div className="hidden md:flex items-center">
        {user ? (
          <Dialog
            variants={customVariants}
            transition={customTransition}
            className="text-amber-50"
          >
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
            <DialogContent className="w-full max-w-md bg-stone-950/70 backdrop-blur-xs">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-amber-50 dark:text-white p-4 titulo">
                  <CircleUser />
                  Account
                </DialogTitle>
              </DialogHeader>
              <div className="w-full flex justify-between p-5">
                <Button variant="secondary">
                  <a href="/soon" className="titulo">
                    Discord
                  </a>
                </Button>
                <Button variant="destructive">
                  <a href="/api/logout" className="titulo">
                    Logout
                  </a>
                </Button>
              </div>
              <DialogClose className="cursor-pointer !text-amber-50" />
            </DialogContent>
          </Dialog>
        ) : (
          <Button variant="signin">
            <Link
              href="/api/login"
              className="flex items-center gap-2 text-slate-950 font-medium"
            >
              Sign In
            </Link>
          </Button>
        )}
      </div>

      {/* Hamburger button mobile */}
      <div className="md:hidden flex-shrink-0">
        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-200">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-full bg-white/10 backdrop-blur-md rounded-xl py-4 px-6 flex flex-col items-start md:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-200 p-3 w-full hover:text-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <House />
            Home
          </Link>
          <Link
            href="/soon"
            className="flex items-center gap-2 text-slate-200 p-3 w-full hover:text-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <Bot />
            Products
          </Link>
          <Link
            href="/#reviews"
            className="flex items-center gap-2 text-slate-200 p-3 w-full hover:text-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <Star />
            Reviews
          </Link>
          <Link
            href="/#faq"
            className="flex items-center gap-2 text-slate-200 p-3 w-full hover:text-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle />
            FAQ
          </Link>

          {user ? (
            <Dialog
              variants={customVariants}
              transition={customTransition}
              className="text-amber-50 w-full"
              onOpenChange={(open) => {
                if (!open) setIsOpen(false);
              }}
            >
              <DialogTrigger>
                <button
                  className="flex items-center gap-2 text-slate-200 p-2 font-semibold cursor-pointer w-full hover:text-neutral-400"
                  aria-label="Account menu"
                >
                  <Image
                    src={user.avatar}
                    alt={user.username}
                    width={36}
                    height={36}
                    className="rounded-full border border-white"
                  />
                  {user.username}
                </button>
              </DialogTrigger>
              <DialogContent className="w-full max-w-md bg-stone-950/70 backdrop-blur-xs">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 text-amber-50 dark:text-white p-4 titulo">
                    <CircleUser />
                    Account
                  </DialogTitle>
                </DialogHeader>
                <div className="w-30 flex flex-col space-y-4 p-5">
                  <Button
                    variant="destructive"
                    className="cursor-pointer w-full"
                  >
                    <a href="/api/logout" className="titulo">
                      Logout
                    </a>
                  </Button>
                </div>
                <DialogClose className="cursor-pointer !text-amber-50" />
              </DialogContent>
            </Dialog>
          ) : (
            <Link
              href="/api/login"
              className="flex items-center gap-2 text-slate-200 p-3 font-semibold hover:text-neutral-400"
              onClick={() => setIsOpen(false)}
            >
              <CircleUser />
              Sign In
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
