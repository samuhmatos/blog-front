"use client";
import { twMerge } from "tailwind-merge";
import { Button, FormTextInput } from "@components";
import { useCreateNewsletter } from "@domain";

import { useNewsletterForm } from "./useNewsletterForm";
import { NewsletterSchema } from "./newsletterSchema";

export function NewsletterForm() {
  const { control, formState, handleSubmit, reset, getFieldState } =
    useNewsletterForm();
  const { loading, create } = useCreateNewsletter();

  function handleRegisterEmailOnNewsletter({ email }: NewsletterSchema) {
    create(email, () => {
      reset();
    });
  }

  return (
    <form
      className="form-inline form_getEmail"
      onSubmit={handleSubmit(handleRegisterEmailOnNewsletter)}
    >
      <div
        className={twMerge(
          "flex gap-3",
          getFieldState("email").error?.message ? "items-center" : "items-end"
        )}
      >
        <FormTextInput
          control={control}
          name="email"
          placeholder="Deixe seu email"
          type="email"
          label="Quer fazer parte de nossa Newsletter semanal?"
          baseClassName="text-gray-400"
        />

        <Button
          // disabled={!formState.isValid}
          placeholder="Enviar"
          type="submit"
          loading={loading}
        />
      </div>
    </form>
  );
}
