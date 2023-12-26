import { PostWithDetails, postService } from "@domain";
import { Page } from "@api";
import { CardMedium, Pagination } from "@components";
import { linkUtils } from "@utils";

async function getPostsByCategory(
  slug: string,
  page: number
): Promise<Page<PostWithDetails>> {
  return postService.getFeed({
    category: slug,
    page,
  });
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
  } = await getPostsByCategory(slug, page || 1);

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
