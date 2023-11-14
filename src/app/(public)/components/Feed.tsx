import { PostWithDetails, postService } from "@domain";
import { Icon, Pagination } from "@components";
import { CardMedium } from "@components";
import { Page } from "@api";
import { PageParams } from "@types";

export const revalidate = 3600; // 1 hour

async function fetchData(
  page: number,
  search: string | undefined
): Promise<Page<PostWithDetails>> {
  return await postService.getFeed({ page, search });
}

export async function Feed(
  searchParams: PageParams<{
    search: string;
    page: string;
  }>["searchParams"]
) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || undefined;

  const {
    data: posts,
    meta: { currentPage, hasNextPage, hasPreviousPage, totalPage, total },
  } = await fetchData(page, search);

  return (
    <div className="w-full lg:w-3/4">
      <div className="mb-4">
        <h4 className="flex items-center justify-center font-semibold text-xl lg:justify-normal">
          Notícias recentes
          <span className="text-red-600 ml-2 text-xl">
            <Icon name="Wifi" size="text-xl" />
          </span>
        </h4>
      </div>

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
        currentUrl={""}
      />
    </div>
  );
}
