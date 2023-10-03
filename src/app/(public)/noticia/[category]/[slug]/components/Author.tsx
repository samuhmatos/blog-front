import Image from "next/image";import Link from "next/link";
import { PostWithDetails } from "@domain";
import { Box } from "./Box";
import { Icon } from "@components";

type AuthorType = Pick<PostWithDetails, "author">;
export function Author({ author }: AuthorType) {
  return (
    <Box title="Autor">
      <div className="relative flex justify-center gap-5 flex-wrap 2sm:flex-nowrap">
        <div className="w-40 h-24">
          <Image
            // src={author.imageURL}
            src={"https://via.placeholder.com/640x480.png/007788?text=autem"}
            width={150}
            height={150}
            alt={`Image do autor ${author.name}`}
            className="rounded-full w-full h-full"
          />
        </div>

        <div>
          <h5 className="text-bold text-lg">{author.name}</h5>
          <h6 className="mt-2">{author.description}</h6>
          <ul className="flex items-center gap-2 text-lg mt-3">
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
    </Box>
  );
}
