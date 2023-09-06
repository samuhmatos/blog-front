import { PageAPI, PageParams, api } from "@api";import { Post, PostApi, PostListApi } from "./postTypes";

async function getBySlug(postSlug: string): Promise<PostApi> {
  const response = await api.get<PostApi>(`post/${postSlug}`);
  return response.data;
}

async function getList(query: keyof PostListApi): Promise<PostApi[]> {
  const response = await api.get<PostApi[]>(`post?category=${query}`);
  return response.data;
}

async function getFeed(params?: PageParams): Promise<PageAPI<PostApi>> {
  const response = await api.get<PageAPI<PostApi>>("post/feed", {
    params,
  });
  return response.data;
}

async function addView(post_id: number): Promise<Pick<Post, "views">> {
  const response = await api.post<Pick<Post, "views">>(`post/${post_id}/view`);
  return response.data;
}

async function getSuggestion(): Promise<PostApi[]> {
  const response = await api.get<PostApi[]>("post/suggestion");

  return response.data;
}

async function getPostsByCategorySlug(
  categorySlug: string,
  { page, per_page }: PageParams
): Promise<PageAPI<PostApi>> {
  const response = await api.get<PageAPI<PostApi>>(
    `category/paginate/${categorySlug}`,
    {
      params: {
        per_page,
        page,
      },
    }
  );

  return response.data;
}

export const postApi = {
  getList,
  getFeed,
  getBySlug,
  getSuggestion,
  addView,
  getPostsByCategorySlug,
};
