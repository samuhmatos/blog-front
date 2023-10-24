"use client";
import { useForgotPassword } from "@domain";
import { useForgotPasswordSchema, ForgotPasswordSchema } from "@schema";
import { Button, FormTextInput } from "@components";

export default function ForgotPasswordPage() {
  const { control, formState, handleSubmit } = useForgotPasswordSchema();
  const { loading, action } = useForgotPassword();

  function onSubmit({ email }: ForgotPasswordSchema) {
    action(email);
  }

  return (
    <>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-5">
        Esqueceu a sua senha ?
      </h1>

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
    </>
  );
}
