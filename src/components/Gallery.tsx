"use client";

import { motion } from "framer-motion";
import { gallery } from "../data/site";

export default function Gallery() {
  return (
    <section className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-purple-300">
              Galeria
            </p>

            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-axis-cream md:text-6xl">
              Produto bonito vende antes do primeiro pedido.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/55">
            Uma vitrine visual com produtos, textura, cor e presença de marca.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-5 sm:auto-rows-[360px] md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.04] ${item.size}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                  Casa do Açaí
                </span>

                <h3 className="text-3xl font-black tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}