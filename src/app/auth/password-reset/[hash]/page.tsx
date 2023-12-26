import { Metadata } from "next";
import { PageParams } from "@types";
import { PasswordResetForm } from "./components/PasswordResetForm";

export const metadata: Metadata = {
  title: "Redefinir senha | Blog Samuel",
  description: "Redefina sua senha de sua conta no Blog Samuel",
};

export default function PasswordResetPage({
  params,
  searchParams,
}: PageParams<{ email: string }, { hash: string }>) {
  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Mude usa senha
      </h1>

      <PasswordResetForm email={searchParams.email} hash={params.hash} />
    </>
  );
}
