import { Camera, MessageCircle, MapPin } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_URL } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.3em]">
            Casa do Açaí
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
            Açaí premium, taças gourmet e promoções especiais em Jundiaí-SP.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white/65 transition hover:bg-white hover:text-black"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white/65 transition hover:bg-white hover:text-black"
          >
            <Camera size={16} />
            Instagram
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm font-bold text-white/65 transition hover:bg-white hover:text-black"
          >
            <MapPin size={16} />
            Endereço
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
        <p>© 2026 A Casa do Açaí. Todos os direitos reservados.</p>

        <p>
          Desenvolvido por{" "}
          <span className="font-black tracking-[0.2em] text-white/60">
            AXIS
          </span>
        </p>
      </div>
    </footer>
  );
}