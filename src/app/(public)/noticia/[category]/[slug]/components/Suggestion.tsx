import { PostWithDetails, postService } from "@domain";import { Box } from "./Box";
import Image from "next/image";
import Link from "next/link";
import { linkUtils } from "@utils";

interface Props {
  post: PostWithDetails;
}

async function getPostSuggestion(): Promise<PostWithDetails[]> {
  try {
    return await postService.getSuggestion();
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function Suggestion({ post }: Props) {
  const posts = await getPostSuggestion();

  return (
    <Box title="Você também pode gostar">
      <div className="flex flex-wrap gap-10 justify-center sm:flex-nowrap">
        {posts.map((post, index) => (
          <div className="w-full sm:w-1/2" key={post.id}>
            <Link href={linkUtils.linkPost(post.slug, post.category.slug)}>
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
            </Link>
          </div>
        ))}
      </div>
    </Box>
  );
}
