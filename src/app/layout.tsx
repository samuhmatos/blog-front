import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Header } from "@components";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export const metadata: Metadata = {
  title:
    "Blog do Samuel Matos - Desenvolvedor Full Stack | Notícias, ponto de vista e experiências",
  description:
    "Blog dedicado a mostrar meus talentos como programador, meus projetos e certificações. Descubra como posso ajudar você em seus projetos e sonhos.",
  keywords:
    "programador, desenvolvedor, certificações, projetos, programação, blog de tecnologia, portfolio, fullStack, Full Stack",
  authors: {
    name: "Samuel matos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
}
