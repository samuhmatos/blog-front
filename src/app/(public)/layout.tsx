import type { Metadata } from "next";
import { Footer, Header } from "@components";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="mt-16 md:mt-28">
        <div>{children}</div>
      </main>

      <Footer />
    </>
  );
}
