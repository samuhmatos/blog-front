import type { Metadata } from "next";
import { Footer, Header } from "@components";

export const metadata: Metadata = {
  title:
    "Blog do Samuel Matos - Desenvolvedor Full Stack | Notícias, ponto de vista e experiências",
  description:
    "Blog dedicado a mostrar meus talentos como programador, meus projetos e certificações. Descubra como posso ajudar você em seus projetos e sonhos.",
  keywords:
    "programador, desenvolvedor, certificações, projetos, programação, blog de tecnologia, portfolio, fullStack, Full Stack, blog",
  authors: {
    name: "Samuel matos",
  },
  abstract:
    "Blog dedicado a mostrar meus talentos como programador, meus projetos e certificações. Descubra como posso ajudar você em seus projetos e sonhos.",
  applicationName: "Blog Samuel Blog",
  creator: "Samuel Matos",
  icons: "/assets/favicon.ico",
  robots: {
    index: true,
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

      <main>
        <div>{children}</div>
      </main>

      <Footer />
    </>
  );
}
