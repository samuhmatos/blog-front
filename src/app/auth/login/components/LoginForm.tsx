"use client";
import Link from "next/link";

import { useRouter } from "nextjs-progressloader";
import { Alert } from "@mui/material";
import { FormTextInput, Button } from "@components";
import { linkUtils } from "@utils";
import { useAuth, useAuthService } from "@context";

import { useLoginForm } from "../useLoginForm";
import { LoginSchema } from "../loginSchema";

interface Props {
  redirectPath: string;
}
export function LoginForm({ redirectPath }: Props) {
  const router = useRouter();
  const { control, handleSubmit, formState } = useLoginForm();
  const { signIn } = useAuthService();
  const { loading, errorMessage } = useAuth();

  function onSubmit(val: LoginSchema) {
    signIn(
      {
        email: val.email,
        password: val.password,
      },
      () => {
        try {
          router.push("redirect");
        } catch (error) {
          router.push("home");
        }
      }
    );
  }

  return (
    <>
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
