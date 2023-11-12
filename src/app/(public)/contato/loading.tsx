"use client";import { Button, Icon } from "@components";
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
            <div>
              <span className="font-bold text-sm mb-1">Nome</span>
              <div className="h-8 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

            <div>
              <span className="font-bold text-sm mb-1">Nome</span>
              <div className="h-8 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

            <div>
              <span className="font-bold text-sm mb-1">Email</span>
              <div className="h-8 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

            <div>
              <span className="font-bold text-sm mb-1">Telefone</span>
              <div className="h-8 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

            <div>
              <span className="font-bold text-sm mb-1">Assunto</span>
              <div className="h-8 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

            <div>
              <span className="font-bold text-sm mb-1">Sua mensagem</span>
              <div className="h-28 animate-pulse bg-gray-400 mb-2 rounded-lg"></div>
            </div>

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
