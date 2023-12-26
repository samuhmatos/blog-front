import { Metadata } from "next";import { ContainerLink, ContainerLinkProps } from "nextjs-progressloader";
import { PageParams } from "@types";

import { RegisterForm } from "./components/RegisterForm";

export const metadata: Metadata = {
  title: "Criar conta | Blog Samuel",
  description: "Crie sua conta no Blog do Samuel",
};

export default function RegisterPage({
  searchParams: { redirect },
}: PageParams<{ redirect: string }>) {
  var links: ContainerLinkProps["links"] = [
    { href: redirect, nickname: "redirect" },
  ];

  return (
    <>
      {redirect && redirect !== "/" && <ContainerLink links={links} />}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Crie sua conta no blog
      </h1>

      <RegisterForm redirectPath={redirect || "/"} />
    </>
  );
}
