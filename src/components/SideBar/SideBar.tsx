import { Post, PostList, postService } from "@domain";
import { Session } from "./components/Session";

async function getList(query: keyof PostList): Promise<Post[]> {
  try {
    return await postService.getList("videos");
  } catch (error: any) {
    throw new Error(JSON.stringify(error.response.data));
  }
}

export async function SideBar() {
  const videosPosts = await getList("videos");
  const popularPosts = await getList("popular");
  const reviewPosts = await getList("reviews");

  return (
    <div className="w-full flex flex-col mt-3 pt-3 border-t border-gray-300 lg:w-1/4 lg:pt-0 lg:mt-0 lg:border-t-0">
      <Session title="Videos" data={videosPosts} semiSmall />
      <Session title="Populares" data={popularPosts} />
      <Session title="Reviews" data={reviewPosts} />
    </div>
  );
}
