"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Sparkles } from "lucide-react";
import { products, WHATSAPP_URL } from "../data/site";

export default function ProductShowcase() {
  return (
    <section id="produtos" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(109,40,217,0.18),_transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-purple-300">
              Produtos destaque
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-axis-cream md:text-6xl">
              Escolha seu próximo favorito.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55">
            Produtos apresentados com foco em desejo, textura e percepção de valor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl transition duration-500 hover:-translate-y-3 hover:bg-white/[0.07]"
            >
              <div className="relative h-[380px] overflow-hidden sm:h-[480px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 backdrop-blur-md">
                  <Sparkles size={16} />
                  <span className="text-xs font-black uppercase tracking-[0.18em]">
                    {product.tag}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-black leading-none text-white sm:text-3xl">
                      {product.name}
                    </h3>

                    <span className="rounded-full bg-lime-300 px-4 py-2 text-sm font-black text-black">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-white/70">
                    {product.description}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:scale-105"
                    >
                      <ShoppingBag size={17} />
                      Pedir
                    </a>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:bg-purple-600"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}