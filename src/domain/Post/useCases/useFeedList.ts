import { usePaginatedList } from "../../hooks/usePaginatedList";import { postService } from "../postService";
import { Post } from "../postTypes";
import { PageParams } from "@api";

export function useFeedList(params: PageParams) {
  return usePaginatedList<Post>(postService.getFeed, params);
}
