"use client";
import Link from "next/link";
import { ContainerLink, ContainerLinkProps } from "nextjs-progressloader";
import { Alert } from "@mui/material";
import { FormTextInput, Button } from "@components";
import { linkUtils } from "@utils";

import { useLoginForm } from "../useLoginForm";
import { LoginSchema } from "../loginSchema";
import { useSignIn } from "@domain";

interface Props {
  redirectPath: string;
}
export function LoginForm({ redirectPath }: Props) {
  const { control, handleSubmit, formState } = useLoginForm();
  const { signIn, loading, errorMessage } = useSignIn();

  var links: ContainerLinkProps["links"] = [
    { href: redirectPath, nickname: "redirect" },
  ];

  async function onSubmit(params: LoginSchema) {
    await signIn(params);
  }

  return (
    <>
      {redirectPath && redirectPath !== "/" && <ContainerLink links={links} />}

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
            href={
              linkUtils.linkAuthRoute("register") + `?redirect=${redirectPath}`
            }
            className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Criar conta
          </Link>
        </p>
      </form>
    </>
  );
}
