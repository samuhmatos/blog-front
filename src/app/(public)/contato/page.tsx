"use client";
import {
  FormTextAreaInput,
  LoadButton,
  FormTextInput,
  Icon,
} from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContatoSchema, contatoSchema } from "./ContatoPageSchema";
import Link from "next/link";
import { useCreateContact } from "@domain";

export default function ContatoScreen() {
  const { loading, create } = useCreateContact();

  const { control, formState, handleSubmit, reset } = useForm<ContatoSchema>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      email: "",
      fullName: "",
      phone: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });

  function submitForm(data: ContatoSchema) {
    create(
      {
        ...data,
        name: data.fullName,
      },
      () => reset()
    );
  }

  return (
    <div className="container mx-auto mt-24 md:mt-32 px-2">
      <div className="flex gap-5 justify-center flex-wrap 2sm:flex-nowrap">
        <div className="w-full 2sm:w-1/2">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">Quem sou eu</h2>
            <h3 className="text-gray-500 text-sm">
              Samuel Matos, desenvolvedor Full Stack
            </h3>
            <h3 className="text-gray-500 text-sm">
              Tecnologias: Laravel, React Native, Next Js, React Js, MYSQL
            </h3>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2">
              Como eu poderia te ajudar?
            </h2>
            <h3 className="text-gray-500 text-sm">
              Tem vontade de ter um blog? Uma Landing Page? Uma rede social, ou
              qualquer outra coisa? Entre em contato comigo
            </h3>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-2 flex gap-2 items-center">
              Meu projeto no GitHub
              <Icon
                name="GitHub"
                className="hover:text-sky-500"
                link={{
                  href: "https://github.com/samuhmatos",
                  target: "_blank",
                }}
              />
            </h2>
            <Link
              href="https://github.com/samuhmatos/blog-front"
              target="_blank"
            >
              <h3 className="text-gray-500 text-sm underline">
                Projeto Front end (Next Js)
              </h3>
            </Link>
            <Link href="https://github.com/samuhmatos/blog-api" target="_blank">
              <h3 className="text-gray-500 text-sm underline">
                Projeto Back end (Laravel)
              </h3>
            </Link>
          </div>
        </div>

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
              label="Seu comentário"
            />

            <LoadButton
              loading={loading}
              endIcon={<Icon name="Send" />}
              disabled={!formState.isValid}
              placeholder="Enviar"
              className="mt-3"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

//TODO: LOADING CONTATO PAGE
