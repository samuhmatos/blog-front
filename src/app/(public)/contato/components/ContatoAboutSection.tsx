import { Icon } from "@components";import Link from "next/link";

export function ContatoAboutSection() {
  return (
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
        <h2 className="text-lg font-bold mb-2">Como eu poderia te ajudar?</h2>
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
        <Link href="https://github.com/samuhmatos/blog-front" target="_blank">
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
  );
}
