import { Category, postCategoryService } from "..";
import { PagePaginationParams } from "@api";
import { usePaginatedList } from "../../hooks/usePaginatedList";

export function usePostCategoryList(
  params: PagePaginationParams & { category?: string }
) {
  return usePaginatedList<Category>(postCategoryService.paginate, params);
}
