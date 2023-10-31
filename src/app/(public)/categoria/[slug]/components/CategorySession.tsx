import { PostWithDetails, postService } from "@domain";import { ErrorApi, Page } from "@api";
import { CardMedium, Pagination } from "@components";
import { linkUtils } from "@utils";
import { AxiosError } from "axios";

async function getPosts(
  slug: string,
  page: number
): Promise<Page<PostWithDetails>> {
  try {
    const res = await postService.getFeed({
      category: slug,
      page,
    });

    return res;
  } catch (err) {
    let error = err as AxiosError<ErrorApi>;
    console.error(error);
    throw new Error();
  }
}

export async function CategorySession({
  slug,
  page,
}: {
  page: number;
  slug: string;
}) {
  const {
    data: posts,
    meta: { currentPage, hasNextPage, hasPreviousPage, totalPage },
  } = await getPosts(slug, page || 1);

  return (
    <div>
      <div className="w-full">
        {posts.map((post, index) => {
          return <CardMedium post={post} key={index} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        totalPage={totalPage}
        currentUrl={linkUtils.linkCategory("tech")}
      />
    </div>
  );
}
