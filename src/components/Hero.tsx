"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { WHATSAPP_URL } from "../data/site";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const scale = useTransform(scrollY, [0, 600], [1.08, 1.18]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/acai-hero.jpg"
          alt="Açaí premium"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),_transparent_40%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-axis-black to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-purple-200 backdrop-blur-md"
        >
          <Star size={14} />
          Açaí premium em Jundiaí
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl text-4xl font-black leading-[0.9] tracking-tight text-white sm:text-5xl md:text-8xl"
        >
          Açaí que vira desejo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg"
        >
          Copos, taças e combinações criadas para quem busca sabor, energia e uma
          experiência que dá vontade de repetir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row"
        >
          <a
            href="#produtos"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-sm font-black transition hover:scale-105 hover:bg-purple-500"
          >
            Ver produtos
            <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
          >
            Chamar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:mt-14 sm:gap-4"
        >
          {[
            ["+2k", "Clientes"],
            ["4.9★", "Avaliação"],
            ["Top", "Favorito"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur-md"
            >
              <p className="text-lg font-black text-lime-300">{value}</p>
              <p className="text-xs text-white/50">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}