"use client";import "./globals.css";
import "react-toastify/ReactToastify.min.css";

import { Poppins } from "next/font/google";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  ContainerLink,
  ContainerLinkProps,
  ProgressLoader,
} from "nextjs-progressloader";
import { hasCookie } from "cookies-next";

import { AuthProvider } from "@context";
import { userService } from "@domain";
import { linkUtils } from "@utils";

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
          <ProgressLoader color="rgb(17, 12, 182)" showSpinner={false} />
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
