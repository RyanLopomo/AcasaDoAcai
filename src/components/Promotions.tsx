"use client";

import { motion } from "framer-motion";
import { BadgePercent, Bolt, Heart, Leaf } from "lucide-react";

const promos = [
  {
    day: "Terça",
    title: "Terça Turbinada",
    description:
      "Mais energia, mais sabor e aquele copo reforçado para começar a semana no ritmo certo.",
    price: "A partir de R$ 17",
    icon: Bolt,
  },
  {
    day: "Quarta",
    title: "Quarta Fit",
    description:
      "Combinações mais leves com frutas, granola e opções equilibradas para manter a rotina.",
    price: "A partir de R$ 17",
    icon: Leaf,
  },
  {
    day: "Quinta",
    title: "Quinta Tentação",
    description:
      "Camadas doces, cremes especiais e aquele visual impossível de ignorar.",
    price: "A partir de R$ 17",
    icon: Heart,
  },
];

export default function Promotions() {
  return (
    <section id="promocoes" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-[#120b1c]" />
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-purple-200">
              <BadgePercent size={15} />
              Semana especial
            </div>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-axis-cream md:text-6xl">
              Cada dia, uma desculpa perfeita para pedir.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 md:justify-self-end">
            Promoções pensadas para criar recorrência, aumentar desejo e transformar
            dias comuns em campanhas de venda.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {promos.map((promo, index) => {
            const Icon = promo.icon;

            return (
              <motion.article
                key={promo.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                viewport={{ once: true }}
                className="group relative min-h-[360px] overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/30 p-6 transition duration-500 hover:-translate-y-3 hover:bg-black/45 md:min-h-[380px]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-400 to-lime-300" />
                <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-purple-500/20 blur-3xl transition group-hover:scale-125" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/60">
                      {promo.day}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-black leading-none tracking-tight text-white sm:text-4xl">
                      {promo.title}
                    </h3>

                    <p className="mt-5 text-sm leading-6 text-white/55">
                      {promo.description}
                    </p>

                    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-300">
                        Oferta da casa
                      </p>
                      <p className="mt-2 text-2xl font-black">{promo.price}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}