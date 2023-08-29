import { Post } from "@domain";
import { Box } from "./Box";
import Image from "next/image";

interface Props {
  post: Post;
}
export function Suggestion({ post }: Props) {
  return (
    <Box title="Você também pode gostar">
      <div className="flex gap-10 justify-center">
        <div className="w-1/2">
          <div className="h-48">
            <Image
              src={post.imageURL}
              width={400}
              height={400}
              className="w-full h-full"
              alt=""
            />
          </div>

          <h5 className="mt-4 text-bold text-lg">{post.title}</h5>
          <div className="flex gap-2 mt-3 text-gray-500">
            <small>{post.category.name}</small>
            <small>/</small>
            <small>{post.createdAtFormatted}</small>
          </div>
        </div>

        <div className="w-1/2">
          <div className="h-48">
            <Image
              src={post.imageURL}
              width={400}
              height={400}
              className="w-full h-full"
              alt=""
            />
          </div>

          <h5 className="mt-4 text-bold text-lg">{post.title}</h5>
          <div className="flex gap-2 mt-3 text-gray-500">
            <small>{post.category.name}</small>
            <small>/</small>
            <small>{post.createdAtFormatted}</small>
          </div>
        </div>
      </div>
    </Box>
  );
}
