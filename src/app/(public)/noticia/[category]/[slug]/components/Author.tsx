import Image from "next/image";
import { PostWithDetails } from "@domain";
import { Box } from "./Box";
import { Icon } from "@components";

type AuthorType = Pick<PostWithDetails, "author">;
export function Author({ author }: AuthorType) {
  return (
    <Box className="border-none mt-8 3sm:px-14">
      <section>
        <div className="items-center bg-gray-100 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
              src={author.imageURL || "/assets/user.png"}
              alt={`Foto do autor ${author.name}`}
            />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">{author.name}</a>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">
              CEO & Web Developer
            </span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              {author.description}
            </p>
            <ul className="flex space-x-4 sm:mt-0 text-gray-500">
              <li>
                <Icon
                  name="Instagram"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://www.instagram.com/samuh.matos/",
                    target: "_blank",
                  }}
                />
              </li>
              <li>
                <Icon
                  name="LinkedIn"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://www.linkedin.com/in/o-samuelmatos/",
                    target: "_blank",
                  }}
                />
              </li>
              <li>
                <Icon
                  name="Envelope"
                  className="hover:text-sky-500"
                  link={{
                    href: "mailto:samuhmatos@gmail.com",
                    target: "_blank",
                  }}
                />
              </li>
              <li>
                <Icon
                  name="GitHub"
                  className="hover:text-sky-500"
                  link={{
                    href: "https://github.com/samuhmatos",
                    target: "_blank",
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Box>
  );
}
