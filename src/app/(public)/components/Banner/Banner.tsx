import { PostWithDetails, postService } from "@domain";
import { BannerBox } from "./components/BannerBox";

export const revalidate = Number(process.env.NEXT_PUBLIC_REVALIDATE_30_MINUTES);

async function getList(): Promise<PostWithDetails[]> {
  return await postService.getList("best");
}
export async function Banner() {
  const posts = await getList();

  return (
    <section>
      <div className="flex justify-center w-full gap-2 flex-wrap  lg:flex-nowrap">
        {posts.map((post, index) => (
          <BannerBox post={post} first={index === 0} key={post.id} />
        ))}
      </div>
    </section>
  );
}
