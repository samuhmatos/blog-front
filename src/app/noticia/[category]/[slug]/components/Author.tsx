import Image from "next/image";
import { BsInstagram, BsGithub, BsFillEnvelopeFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { Post } from "../../../../../domain/Post";
import { Box } from "./Box";

type AuthorType = Pick<Post, "author">;
export function Author({ author }: AuthorType) {
  return (
    <Box title="Autor">
      <div className="relative flex gap-5">
        <div>
          <Image
            // src={author.imageURL}
            src={"https://via.placeholder.com/640x480.png/007788?text=autem"}
            width={200}
            height={200}
            alt={`Image do autor ${author.name}`}
            className="rounded-full"
          />
        </div>

        <div>
          <h5 className="text-bold text-lg">{author.name}</h5>
          <h6 className="mt-2">{author.description}</h6>
          <ul className="flex items-center gap-2 text-lg mt-3">
            <li>
              <Link
                className=" hover:text-sky-500 transition-all"
                href="https://www.instagram.com/samuh.matos/"
                target="_blank"
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link
                className=" hover:text-sky-500 transition-all"
                href="https://www.linkedin.com/in/o-samuelmatos/"
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </li>
            <li>
              <Link
                className=" hover:text-sky-500 transition-all"
                href="mailto:samuhmatos@gmail.com"
                target="_blank"
              >
                <BsFillEnvelopeFill />
              </Link>
            </li>
            <li>
              <Link
                className=" hover:text-sky-500 transition-all"
                href="https://github.com/samuhmatos"
                target="_blank"
              >
                <BsGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
}
