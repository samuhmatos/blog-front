import { notFound } from "next/navigation";
import { PageParams } from "../page";
import { Category, Post, postService } from "@domain";
import { Page } from "@api";
import { CardMedium, NavigationPathType, Pagination } from "@components";
import { linkUtils } from "@utils";

async function getPosts(slug: string, page: number): Promise<Page<Post>> {
  try {
    const res = await postService.getPostsByCategorySlug(slug, page);
    return res;
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}

interface Props extends PageParams {
  category: Category;
}

export async function CategorySession({
  params: { slug, page },
  category,
}: Props) {
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
        currentUrl={linkUtils.linkCategories()}
      />
    </div>
  );
}
