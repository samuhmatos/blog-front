"use client";
import { usePaginatedList, QueryKeys, UsePaginatedListResult } from "@infra";

import { PostPageParams, PostWithDetails, postService } from "..";

export function useFeedList(
  params: PostPageParams
): UsePaginatedListResult<PostWithDetails> {
  const serviceList = () => {
    if (params.is_trash && !params.is_draft) {
      return postService.getTrash({
        ...params,
      });
    } else if (params.is_draft && !params.is_trash) {
      return postService.getDraft({
        ...params,
      });
    } else {
      return postService.getFeed({
        ...params,
      });
    }
  };

  const paginationMode = (): "draft" | "trash" | "publish" => {
    if (params.is_draft) return "draft";
    if (params.is_trash) return "trash";

    return "publish";
  };

  return usePaginatedList<PostWithDetails>(
    [QueryKeys.PostList, params.page, params.per_page, paginationMode()],
    serviceList
  );
}
