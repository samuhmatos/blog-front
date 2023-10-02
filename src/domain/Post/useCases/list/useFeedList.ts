"use client";
import { usePaginatedList } from "../../../hooks/usePaginatedList";
import { postService } from "../../postService";
import { PostPageParams, PostWithDetails } from "../../postTypes";

export function useFeedList(params: PostPageParams) {
  const fn = () => {
    if (params.is_trash && !params.is_draft) {
      return postService.getTrash;
    } else if (params.is_draft && !params.is_trash) {
      return postService.getDraft;
    } else {
      return postService.getFeed;
    }
  };

  return usePaginatedList<PostWithDetails>(fn(), params);
}
