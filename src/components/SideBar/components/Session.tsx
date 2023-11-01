import { CardSemiSmall, CardSmall } from "@components";
import { PostList, PostWithDetails, postService } from "@domain";

async function getList(query: keyof PostList): Promise<PostWithDetails[]> {
  try {
    return await postService.getList(query);
  } catch (error: any) {
    throw new Error(JSON.stringify(error.response.data));
  }
}

interface Props {
  title: string;
  semiSmall?: boolean;
  query: keyof PostList;
}

export async function Session({ title, semiSmall = false, query }: Props) {
  const posts = await getList(query);

  return (
    <div className="mb-5">
      <h3 className="text-xl mb-4 font-bold text-center lg:text-start">
        {title}
      </h3>
      <div className="flex flex-row justify-center gap-2 flex-wrap md:flex-nowrap lg:flex-col">
        {posts.map((post) =>
          semiSmall ? (
            <CardSemiSmall key={post.id} post={post} />
          ) : (
            <CardSmall key={post.id} post={post} />
          )
        )}
      </div>
    </div>
  );
}
