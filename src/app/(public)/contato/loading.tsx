"use client";
import { Button, Icon, InputText } from "@components";
import { ContatoAboutSection } from "./components/ContatoAboutSection";

export default function Loading() {
  return (
    <div className="container mx-auto mt-4 px-2">
      <div className="flex gap-5 justify-center flex-wrap 2sm:flex-nowrap">
        <ContatoAboutSection />

        <div className="w-full 2sm:w-1/2">
          <h4 className="text-lg font-bold mb-4 text-center mt-2 2sm:mt-0 2sm:text-start">
            Entre em contato comigo
          </h4>
          <div>
            <InputText
              name="fullName"
              setValue={() => {}}
              value=""
              disabled
              placeholder="Digite seu nome completo"
              label="Nome"
            />
            <InputText
              name="phone"
              setValue={() => {}}
              value=""
              disabled
              placeholder="Digite seu email"
              label="Email"
            />
            <InputText
              name="email"
              setValue={() => {}}
              value=""
              disabled
              placeholder="Digite seu número de telefone"
              label="Telefone"
            />
            <InputText
              name="subject"
              setValue={() => {}}
              value=""
              disabled
              placeholder="Digite o assunto"
              label="Assunto"
            />
            <InputText
              name="message"
              setValue={() => {}}
              value=""
              disabled
              placeholder="Digite sua mensagem"
              label="mensagem"
            />

            <Button
              endIcon={<Icon name="Send" />}
              disabled
              placeholder="Enviar"
              className="mt-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
