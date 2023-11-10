import { PagePaginationParams } from "@api";
import { QueryKeys, usePaginatedList } from "@infra";

import { Category, postCategoryService } from "..";

export function usePostCategoryList(params: PagePaginationParams) {
  function serviceList() {
    return postCategoryService.paginate(params);
  }

  return usePaginatedList<Category>(
    [QueryKeys.PostCategoryList, params.page, params.per_page],
    serviceList
  );
}
