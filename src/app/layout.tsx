import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A Casa do Açaí | Açaí Premium em Jundiaí",
  description:
    "Produtos premium, taças gourmet, promoções especiais e atendimento da Casa do Açaí em Jundiaí-SP.",
  openGraph: {
    title: "A Casa do Açaí",
    description:
      "Açaí premium, taças gourmet e promoções especiais em Jundiaí.",
    images: ["/acai-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}