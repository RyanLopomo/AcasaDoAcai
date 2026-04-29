"use client";

import { motion } from "framer-motion";
import { Camera, Clock, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../data/site";

export default function StoreInfo() {
  return (
    <section id="contato" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.04]">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12"
          >
            <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-purple-300">
              Atendimento
            </p>

            <h2 className="text-4xl font-black leading-none tracking-tight text-axis-cream md:text-6xl">
              Passe na loja ou peça agora.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Confira os horários, acompanhe novidades pelo Instagram e fale com a
              equipe para consultar sabores, promoções e pedidos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-6 py-4 text-sm font-black text-black transition hover:scale-105"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-black"
              >
                <Camera size={18} />
                Instagram
              </a>
            </div>
          </motion.div>

          <div className="grid gap-4 bg-black/25 p-6 md:grid-cols-2 md:p-8">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
              <MapPin className="mb-5 text-purple-300" size={24} />
              <h3 className="text-lg font-black">Endereço</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Av. Dr. Gilberto Luiz Pereira da Silva, 567 — Jundiaí-SP
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
              <Clock className="mb-5 text-lime-300" size={24} />
              <h3 className="text-lg font-black">Horário</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Terça a sábado: 13h às 20h <br />
                Domingo: 13h às 17h
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/35 p-6 md:col-span-2">
              <MessageCircle className="mb-5 text-green-300" size={24} />
              <h3 className="text-lg font-black">Pedidos e dúvidas</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                Atendimento rápido para pedidos, retirada, disponibilidade de sabores
                e promoções da semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}