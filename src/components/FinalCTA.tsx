"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Camera, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../data/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-10 md:px-8 md:pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(109,40,217,0.32),_transparent_45%)]" />

      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-purple-800 via-purple-950 to-black p-8 text-center md:p-16"
      >
        <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-lime-300">
          A Casa do Açaí
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-black leading-none tracking-tight text-axis-cream sm:text-5xl md:text-8xl">
          Seu próximo açaí começa agora.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
          Escolha seu favorito, acompanhe as promoções da semana e viva a experiência
          da Casa do Açaí.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 text-sm font-black text-black transition hover:scale-105"
          >
            <MessageCircle size={18} />
            Pedir pelo WhatsApp
            <ArrowUpRight size={18} className="transition group-hover:rotate-45" />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
          >
            <Camera size={18} />
            Ver Instagram
          </a>
        </div>
      </motion.div>
    </section>
  );
}