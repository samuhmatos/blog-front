import { postCategoryService } from "@domain";import Image from "next/image";
import Link from "next/link";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Icon } from "../Icon/Icon";

export async function Footer() {
  const popularCategories = await postCategoryService.getPopular();

  return (
    <footer className="bg-black mt-16 py-6 text-white px-2 md:py-8">
      <div className="container m-auto">
        <div className="flex justify-evenly gap-2 flex-wrap-reverse md:flex md:gap-5 md:flex-nowrap md:justify-between lg:gap-10">
          <div className="text-gray-400 mt-5 md:mt-0">
            <div className="text-left">
              <div className="w-52">
                <Link href="/">
                  <Image
                    src="/assets/tech-logo.png"
                    alt="Logo do blog"
                    width={200}
                    height={200}
                  />
                </Link>
              </div>

              <small className="mt-4">
                Este é um blog simulando postagens de vários segmentos e
                entregando ao usuário
              </small>
              <div className="flex gap-5 mt-4">
                <Icon
                  name="Instagram"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://www.instagram.com/samuh.matos/",
                    target: "_blank",
                  }}
                />

                <Icon
                  name="LinkedIn"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://www.linkedin.com/in/o-samuelmatos/",
                    target: "_blank",
                  }}
                />

                <Icon
                  name="Envelope"
                  className="hover:text-sky-500"
                  link={{
                    href: "mailto:samuhmatos@gmail.com",
                    target: "_blank",
                  }}
                />

                <Icon
                  name="GitHub"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://github.com/samuhmatos",
                    target: "_blank",
                  }}
                />
              </div>

              <div className="mt-5">
                <Form />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Categorias</h2>
            <ul className="mt-8 text-sm text-gray-400">
              {popularCategories.map((category) => {
                return (
                  <List
                    name={category.name}
                    postsCount={category.postsCount}
                    slug={category.slug}
                    key={category.id}
                  />
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="font-bold">Copyrights</h2>
            <ul className="text-sm mt-8 text-gray-400">
              <li className="mb-1 hover:text-sky-500 transition-all">
                <Link href="/contact">Entre em contato</Link>
              </li>
              <li className="mb-1 hover:text-sky-500 transition-all">
                <Link href="/contact">Tem sugestão?</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright">
              &copy; Blog. Desenvolvedor:
              <Link
                href="/contact"
                className="hover:text-sky-500 transition-all ml-1"
              >
                Samuel Matos
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
