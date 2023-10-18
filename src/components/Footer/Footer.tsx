import { postCategoryService } from "@domain";import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./components/NewsletterForm";
import { List } from "./components/List";
import { Icon } from "../Icon/Icon";

export async function Footer() {
  const popularCategories = await postCategoryService.getPopular();

  return (
    <footer className="bg-secondary w-full mt-16 py-6 text-white px-2 md:py-8">
      <div className="container m-auto">
        <div className="flex justify-evenly gap-2 flex-wrap-reverse md:flex md:gap-5 md:flex-nowrap md:justify-around lg:gap-10">
          <div className="text-gray-400 w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="text-left">
              <div className="flex items-center justify-center md:justify-normal gap-5">
                <div>
                  <Link href="/">
                    <Image
                      src="/assets/logo.png"
                      alt="Logo do blog"
                      width={80}
                      height={80}
                    />
                  </Link>
                </div>

                <div className="flex gap-5">
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
              </div>

              <div className="mt-3 md:mt-5">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Categorias</h2>
            <ul className="mt-4 md:mt-6 text-sm text-gray-400">
              {popularCategories.map((category, index) => {
                if (index > 4) {
                  return;
                }

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
            <ul className="text-sm mt-4 md:mt-8 text-gray-400">
              <li className="mb-1 hover:text-sky-500 transition-all">
                <Link href="/contact">Entre em contato</Link>
              </li>
              <li className="mb-1 hover:text-sky-500 transition-all">
                <Link href="/contact">Tem sugestão?</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
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
    </footer>
  );
}
