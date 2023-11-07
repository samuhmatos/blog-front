"use client";
import { PageParams } from "@types";
import { Button, FormTextInput } from "@components";
import { PasswordResetSchema } from "./passwordResetSchema";
import { useEffect } from "react";
import { usePasswordReset } from "@domain";
import { usePasswordResetForm } from "./usePasswordResetForm";

export default function PasswordResetPage({
  params,
  searchParams,
}: PageParams<{ email: string }, { hash: string }>) {
  const { control, formState, handleSubmit, setValue } = usePasswordResetForm();

  const { loading, action } = usePasswordReset();

  useEffect(() => {
    if (params.hash && searchParams.email) {
      setValue("token", params.hash);
      setValue("email", searchParams.email);
    }
  }, []);

  function onSubmit(val: PasswordResetSchema) {
    action(val);
  }

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Mude usa senha
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3 flex-wrap 3sm:flex-nowrap">
          <FormTextInput
            control={control}
            name="password"
            type="password"
            label="Senha"
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
          placeholder="Mudar senha"
          full
          loadingPosition="center"
          disabled={!formState.isValid}
          type="submit"
          className="mt-3"
          loading={loading}
        />
      </form>
    </>
  );
}
