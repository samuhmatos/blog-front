"use client";import "./globals.css";
import "react-toastify/ReactToastify.min.css";

import { Poppins } from "next/font/google";

import { AuthProvider } from "@context";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import { userService } from "@domain";
import { hasCookie } from "cookies-next";
import { useEffect } from "react";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

export default function Layout({ children }: { children: React.ReactNode }) {
  async function getCsrfToken() {
    if (!hasCookie("XSRF-TOKEN")) {
      await userService.CSRF_token();
    }
  }

  useEffect(() => {
    getCsrfToken();
  }, []);

  return (
    <AuthProvider>
      <html lang="pt-br" className="h-screen">
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
        <body className={poppins.className}>
          <NextTopLoader color="rgb(21, 14, 233)" showSpinner={false} />

          <div>{children}</div>

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
