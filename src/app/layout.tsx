import "./globals.css";
import "react-toastify/ReactToastify.min.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer, Header } from "@components";
import { AuthProvider } from "@context";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
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
    <AuthProvider>
      <html lang="pt-br">
        <body className={poppins.className}>
          <NextTopLoader color="rgb(21, 14, 233)" showSpinner={false} />

          <Header />

          <main>{children}</main>

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </body>
      </html>
    </AuthProvider>
  );
}
