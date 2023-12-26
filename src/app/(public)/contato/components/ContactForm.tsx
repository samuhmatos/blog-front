"use client";
import { FormTextAreaInput, Button, FormTextInput, Icon } from "@components";
import { useCreateContact } from "@domain";

import { ContactSchema } from "../ContactSchema";
import { useContactForm } from "../useContactForm";

export function ContactForm() {
  const { loading, mutate: create } = useCreateContact();
  const { control, formState, handleSubmit, reset } = useContactForm();

  function submitForm(data: ContactSchema) {
    create(
      {
        ...data,
        name: data.fullName,
      },
      () => reset()
    );
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <FormTextInput
        control={control}
        name="fullName"
        placeholder="Digite seu nome completo"
        label="Nome"
      />

      <FormTextInput
        control={control}
        name="email"
        placeholder="Digite seu email"
        label="Email"
      />

      <FormTextInput
        control={control}
        name="phone"
        type="tel"
        placeholder="Digite seu número de telefone"
        label="Telefone"
      />

      <FormTextInput
        control={control}
        name="subject"
        placeholder="Digite o assunto"
        label="Assunto"
      />

      <FormTextAreaInput
        control={control}
        name="message"
        placeholder="Digite sua mensagem"
        label="Sua mensagem"
      />

      <Button
        loading={loading}
        endIcon={<Icon name="Send" />}
        disabled={!formState.isValid}
        placeholder="Enviar"
        className="mt-3"
        type="submit"
      />
    </form>
  );
}
