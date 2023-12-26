"use client";

import { useForgotPassword } from "@domain";
import { Button, FormTextInput } from "@components";

import { useForgotPasswordForm } from "../useForgotPasswordForm";
import { ForgotPasswordSchema } from "../forgotPasswordSchema";

export function ForgotPasswordForm() {
  const { control, formState, handleSubmit } = useForgotPasswordForm();
  const { loading, mutate } = useForgotPassword();

  function onSubmit({ email }: ForgotPasswordSchema) {
    mutate(email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu email aqui..."
        label="Email"
      />

      <Button
        placeholder="Enviar email"
        full
        disabled={!formState.isValid}
        className="mt-3"
        type="submit"
        loading={loading}
        loadingPosition="center"
      />
    </form>
  );
}
