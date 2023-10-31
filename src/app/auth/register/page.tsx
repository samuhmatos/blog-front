"use client";import { RegisterSchema, useRegisterSchema } from "@schema";
import Link from "next/link";
import { FormTextInput, Button } from "@components";
import { linkUtils } from "@utils";
import { useAuth } from "@domain";
import {
  ContainerLink,
  ContainerLinkProps,
  changeRoute,
} from "nextjs-progressloader";
import { Alert } from "@mui/material";
import { PageParams } from "@types";

export default function RegisterPage({
  searchParams: { redirect },
}: PageParams<{ redirect: string }>) {
  const { control, handleSubmit, formState } = useRegisterSchema();
  const { signUp, loading, error } = useAuth();

  var links: ContainerLinkProps["links"] = [
    { href: redirect || "/", nickname: "redirect" },
  ];

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
          changeRoute("redirect");
        } catch (error) {
          changeRoute("home");
        }
      }
    );
  }

  return (
    <>
      {redirect !== "/" && <ContainerLink links={links} />}
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Crie sua conta no blog
      </h1>
      {error && <Alert severity="error">{error[0]}</Alert>}
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
            href={linkUtils.linkAuthRoute("login")}
            className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Entrar na conta
          </Link>
        </p>
      </div>
    </>
  );
}
