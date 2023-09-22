import { usePaginatedList } from "../../hooks/usePaginatedList";
import { postService } from "../postService";
import { PostWithDetails } from "../postTypes";
import { PageParams } from "@api";

export function useFeedList(params: PageParams) {
  return usePaginatedList<PostWithDetails>(postService.getFeed, params);
}
