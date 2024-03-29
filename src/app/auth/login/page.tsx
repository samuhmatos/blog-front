import { Metadata } from "next";
import { PageParams } from "@types";
import { LoginForm } from "./components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Blog Samuel",
  description: "Faça login no Blog do Samuel",
};

export default function LoginPage({
  searchParams: { redirect },
}: PageParams<{ redirect: string }>) {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Faça login na sua conta
      </h1>

      <LoginForm redirectPath={redirect || "/"} />
    </>
  );
}
