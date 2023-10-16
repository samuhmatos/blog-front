import { PostWithDetails, postService } from "@domain";import { BannerBox } from "./components/BannerBox";

async function getList(): Promise<PostWithDetails[]> {
  try {
    return await postService.getList("best");
  } catch (error) {
    console.log(error);
  }
}
export async function Banner() {
  const posts = await getList();

  return (
    <section className="py-3 mt-4">
      <div className="flex justify-center w-full gap-2 flex-wrap  lg:flex-nowrap">
        {posts.map((post, index) => (
          <BannerBox post={post} first={index === 0} key={post.id} />
        ))}
      </div>
    </section>
  );
}
