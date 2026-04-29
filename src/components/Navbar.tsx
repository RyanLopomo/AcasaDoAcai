"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border border-white/10"
            : "bg-transparent"
        }`}
      >
        <a className="text-xs font-black tracking-[0.28em] md:text-sm">
          CASA DO AÇAÍ
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          className="rounded-full bg-white px-5 py-2 text-sm font-black text-black transition hover:scale-105"
        >
          Pedir agora
        </a>
      </nav>
    </header>
  );
}