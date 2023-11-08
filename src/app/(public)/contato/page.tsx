"use client";import { Metadata } from "next";
import { FormTextAreaInput, Button, FormTextInput, Icon } from "@components";
import { useCreateContact } from "@domain";

import { ContactSchema } from "./ContactSchema";
import { useContactForm } from "./useContactForm";
import { ContatoAboutSection } from "./components/ContatoAboutSection";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato comigo",
  abstract: "Entre em contato comigo",
};

export default function ContatoScreen() {
  const { loading, create } = useCreateContact();
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
    <div className="container mx-auto mt-4 px-2">
      <div className="flex gap-5 justify-center flex-wrap 2sm:flex-nowrap">
        <ContatoAboutSection />

        <div className="w-full 2sm:w-1/2">
          <h4 className="text-lg font-bold mb-4 text-center mt-2 2sm:mt-0 2sm:text-start">
            Entre em contato comigo
          </h4>
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
        </div>
      </div>
    </div>
  );
}
