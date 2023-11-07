"use client";
import { LoginSchema } from "./loginSchema";
import Link from "next/link";
import { FormTextInput, Button } from "@components";
import { linkUtils } from "@utils";
import { useAuth, useAuthService } from "@context";
import {
  ContainerLink,
  ContainerLinkProps,
  changeRoute,
} from "nextjs-progressloader";
import { Alert } from "@mui/material";
import { PageParams } from "@types";
import { useLoginForm } from "./useLoginForm";

export default function LoginPage({
  searchParams: { redirect },
}: PageParams<{ redirect: string }>) {
  const { control, handleSubmit, formState } = useLoginForm();
  const { signIn } = useAuthService();
  const { loading, errorMessage } = useAuth();

  var links: ContainerLinkProps["links"] = [
    { href: redirect, nickname: "redirect" },
  ];

  function onSubmit(val: LoginSchema) {
    signIn(
      {
        email: val.email,
        password: val.password,
      },
      () => {
        try {
          changeRoute("redirect");
        } catch (error) {
          changeRoute("home");
        }
      }
    );
  }

  return (
    <>
      {redirect && redirect !== "/" && <ContainerLink links={links} />}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Faça login na sua conta
      </h1>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          control={control}
          name="email"
          type="email"
          label="Seu Email"
          placeholder="Digite seu email aqui..."
        />

        <FormTextInput
          control={control}
          name="password"
          type="password"
          label="Sua senha"
          placeholder="Digite sua senha aqui..."
        />
        <div className="flex items-center justify-between">
          <Link
            href={linkUtils.linkAuthRoute("forgot-password")}
            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <Button
          placeholder="Login"
          loadingPosition="center"
          full
          disabled={!formState.isValid}
          loading={loading}
          type="submit"
        />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Ainda não tem uma conta?
          <Link
            href={linkUtils.linkAuthRoute("register") + `?redirect=${redirect}`}
            className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Criar conta
          </Link>
        </p>
      </form>
    </>
  );
}
