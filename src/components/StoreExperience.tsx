"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";

export default function StoreExperience() {
  return (
    <section id="loja" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-purple-300">
            A experiência
          </p>

          <h2 className="text-3xl font-black leading-none tracking-tight text-axis-cream sm:text-4xl md:text-6xl">
            Um ponto de encontro com sabor de rotina boa.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
            A Casa do Açaí tem energia de loja viva: produto bonito, atendimento
            próximo e ambiente simples, direto e convidativo para comer ali, retirar
            ou pedir.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              [MapPin, "Jundiaí-SP", "Flores", "text-purple-300"],
              [Clock, "Ter a Sáb", "13h às 20h", "text-lime-300"],
              [Users, "Loja física", "Consumo local", "text-fuchsia-300"],
            ].map(([Icon, title, text, color]: any) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md"
              >
                <Icon className={`mb-4 ${color}`} size={22} />
                <p className="text-sm font-black">{title}</p>
                <p className="mt-1 text-xs text-white/45">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-purple-700/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
            <img
              src="/fachada.jpg"
              alt="Loja Casa do Açaí"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-6">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-black">
                Loja real
              </span>

              <h3 className="mt-4 text-3xl font-black leading-none text-white">
                Aqui o açaí vira momento.
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}