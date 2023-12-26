"use client";
import Link from "next/link";

import { Alert } from "@mui/material";
import { useRouter } from "nextjs-progressloader";
import { FormTextInput, Button } from "@components";
import { linkUtils } from "@utils";
import { useAuth, useAuthService } from "@context";

import { useRegisterForm } from "../useRegisterForm";
import { RegisterSchema } from "../registerSchema";

interface Props {
  redirectPath: string;
}
export function RegisterForm({ redirectPath }: Props) {
  const router = useRouter();

  const { control, handleSubmit, formState } = useRegisterForm();
  const { loading, errorMessage } = useAuth();
  const { signUp } = useAuthService();

  function onSubmit(val: RegisterSchema) {
    signUp(
      {
        email: val.email,
        password: val.password,
        name: val.firstName + " " + val.lastName,
        password_confirmation: val.confirmPassword,
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
      <div className="space-y-3">
        <div className="flex gap-3 flex-wrap 3sm:flex-nowrap">
          <FormTextInput
            control={control}
            name="firstName"
            label="Nome"
            placeholder="Digite seu nome..."
            baseClassName="w-full"
          />

          <FormTextInput
            control={control}
            name="lastName"
            label="Sobrenome"
            placeholder="Digite seu sobrenome..."
            baseClassName="w-full"
          />
        </div>

        <FormTextInput
          control={control}
          name="email"
          type="email"
          label="Seu Email"
          placeholder="Digite seu email aqui..."
        />

        <div className="flex gap-3 flex-wrap 3sm:flex-nowrap">
          <FormTextInput
            control={control}
            name="password"
            type="password"
            label="senha"
            placeholder="Digite sua senha aqui..."
            baseClassName="w-full"
          />

          <FormTextInput
            control={control}
            name="confirmPassword"
            type="password"
            label="Confirmar senha"
            placeholder="Digite sua confirmação de senha aqui..."
            baseClassName="w-full"
          />
        </div>

        <Button
          placeholder="Criar conta"
          loadingPosition="center"
          full
          onClick={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
          loading={loading}
          className="mt-3"
        />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Já tem uma conta?
          <Link
            href={
              linkUtils.linkAuthRoute("login") + `?redirect=${redirectPath}`
            }
            className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Entrar na conta
          </Link>
        </p>
      </div>
    </>
  );
}
