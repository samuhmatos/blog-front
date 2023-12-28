import Link from "next/link";import { SocialMedia } from "@components";
import { BrandIcon } from "@brand";

import { Categories, Copyrights, NewsletterForm } from "./components";

export async function Footer() {
  return (
    <footer className="bg-secondary w-full mt-16 py-6 text-white px-2 md:py-8">
      <div className="container m-auto">
        <div className="flex justify-evenly gap-2 flex-wrap-reverse md:flex md:gap-5 md:flex-nowrap md:justify-around lg:gap-10">
          <div className="text-gray-400 w-full md:w-auto flex flex-col items-center md:items-start">
            <div className="text-left">
              <div className="flex items-center justify-center md:justify-normal gap-5">
                <div>
                  <Link href="/">
                    <BrandIcon widthHeight={80} />
                  </Link>
                </div>

                <SocialMedia />
              </div>

              <div className="mt-3 md:mt-5">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <Categories />

          <Copyrights />
        </div>

        <div className="text-center mt-6">
          &copy; Blog. Desenvolvedor:
          <Link
            href="/contato"
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
