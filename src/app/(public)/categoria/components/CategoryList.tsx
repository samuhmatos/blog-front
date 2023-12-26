import { Category, postCategoryService } from "@domain";import { Pagination } from "@components";
import { linkUtils } from "@utils";
import { Page } from "@api";
import { CategoryContainer } from "./CategoryContainer";

async function getList(page: number): Promise<Page<Category>> {
  return postCategoryService.paginate({
    page,
    per_page: 9,
  });
}

interface Props {
  page: number;
}

export async function CategoryList({ page }: Props) {
  const { data, meta } = await getList(page);

  return (
    <div className="w-full lg:w-3/4">
      <CategoryContainer categories={data} />

      <Pagination
        currentPage={page}
        currentUrl={linkUtils.linkCategories()}
        hasNextPage={meta.hasNextPage}
        hasPreviousPage={meta.hasPreviousPage}
        totalPage={meta.totalPage}
        className="mt-5"
      />
    </div>
  );
}
