import { postService } from "@domain";
import { BannerBox } from "./components/BannerBox";

export async function Banner() {
  const posts = await postService.getList("best");

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
