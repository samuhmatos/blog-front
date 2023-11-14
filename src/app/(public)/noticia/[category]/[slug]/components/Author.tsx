import { PostWithDetails } from "@domain";
import { SocialMedia } from "@components";

import { Box } from "./Box";

type Props = Pick<PostWithDetails, "author">;

export function Author({ author }: Props) {
  return (
    <Box className="border-none mt-8 3sm:px-14">
      <section>
        <div className="items-center bg-gray-100 rounded-lg shadow flex flex-wrap  dark:bg-gray-800 dark:border-gray-700 sm:flex-nowrap">
          <div className="w-full 3sm:w-2/5 md:w-5/12 mx-auto">
            <img
              className="w-full h-full  rounded-lg sm:rounded-l-lg"
              src={author.imageURL || "/assets/user.png"}
              alt={`Foto do autor ${author.name}`}
            />
          </div>

          <div className="p-5 text-gray-500 dark:text-gray-400">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">{author.name}</a>
            </h3>
            <span>CEO & Web Developer</span>
            <p className="mt-3 mb-4 font-light">{author.description}</p>

            <SocialMedia className="gap-4" />
          </div>
        </div>
      </section>
    </Box>
  );
}
