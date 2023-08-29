import { MetaDataPage, MetaDataPageAPI } from "./apiTypes";
function toMetaDataPage(meta: MetaDataPageAPI): MetaDataPage {
  return {
    total: meta.total,
    perPage: meta.per_page,
    currentPage: meta.current_page,
    isFirstPage: meta.is_first_page,
    isLastPage: meta.is_last_page,
    previousPage: meta.previous_page,
    nextPageUrl: meta.next_page_url,
    previousPageUrl: meta.previous_page_url,
    hasNextPage: !!meta.next_page_url,
    hasPreviousPage: !!meta.previous_page_url,
    totalPage: meta.last_page,
  };
}

export const apiAdapter = {
  toMetaDataPage,
};
