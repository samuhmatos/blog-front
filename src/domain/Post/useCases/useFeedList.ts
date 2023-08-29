import { useSearchParams } from "next/navigation";import { usePaginatedList } from "../../hooks/usePaginatedList";
import { postService } from "../postService";
import { Post } from "../postTypes";

export function useFeedList() {
  const searchParams = useSearchParams();
  const searchParam = searchParams.get("search");
  const pageParam = searchParams.get("page");

  const page = pageParam ? Number(pageParam) : 1;
  const search = searchParam ? searchParam : undefined;

  return usePaginatedList<Post>(postService.getFeed, {
    page,
    search: search,
  });
}
