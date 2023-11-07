"use client";
import "./globals.css";
import "react-toastify/ReactToastify.min.css";

import { Poppins } from "next/font/google";

import { AuthProvider } from "@context";
import {
  ContainerLink,
  ContainerLinkProps,
  ProgressLoader,
} from "nextjs-progressloader";

import { ToastContainer } from "react-toastify";
import { userService } from "@domain";
import { hasCookie } from "cookies-next";
import { useEffect } from "react";
import { linkUtils } from "../utils/linkUtils";

const poppins = Poppins({ subsets: ["devanagari"], weight: "400" });

const links: ContainerLinkProps["links"] = [
  {
    href: "/",
    nickname: "home",
  },
  {
    href: linkUtils.linkAuthRoute("login"),
    nickname: "login",
  },
  {
    href: "/dashboard",
    nickname: "dashboard",
  },
];

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
          <ProgressLoader color="rgb(21, 14, 233)" showSpinner={false} />
          <ContainerLink links={links} />

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
