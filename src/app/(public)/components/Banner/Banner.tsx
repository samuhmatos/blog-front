import { PostWithDetails, postService } from "@domain";
import { BannerBox } from "./components/BannerBox";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export async function func(time: number = 20000, message: string = "done") {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(message);
      resolve;
    }, time);
  });
}

async function getList(): Promise<PostWithDetails[]> {
  try {
    return await postService.getList("best");
  } catch (err) {
    let error = err as AxiosError<ErrorApi>;
    throw new Error(error.response?.data.message);
  }
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
