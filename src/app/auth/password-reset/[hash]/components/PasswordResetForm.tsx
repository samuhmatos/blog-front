"use client";
import { useEffect } from "react";

import { Button, FormTextInput } from "@components";
import { usePasswordReset } from "@domain";

import { PasswordResetSchema } from "../passwordResetSchema";
import { usePasswordResetForm } from "../usePasswordResetForm";

interface Props {
  email: string;
  hash: string;
}

export function PasswordResetForm({ email, hash }: Props) {
  const { loading, mutate } = usePasswordReset();
  const { control, formState, handleSubmit, setValue } = usePasswordResetForm();

  useEffect(() => {
    if (hash && email) {
      setValue("token", hash);
      setValue("email", email);
    }
  }, []);

  function onSubmit(val: PasswordResetSchema) {
    mutate(val);
  }
  return (
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
  );
}
