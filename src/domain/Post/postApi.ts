import { PageAPI, PageParams, api } from "@api";
import { Post, PostApi, PostApiWithDetails, PostListApi } from "./postTypes";

async function getBySlug(postSlug: string): Promise<PostApiWithDetails> {
  const response = await api.get<PostApiWithDetails>(`post/${postSlug}`);
  return response.data;
}

async function getList(
  query: keyof PostListApi
): Promise<PostApiWithDetails[]> {
  const response = await api.get<PostApiWithDetails[]>(
    `post?category=${query}`
  );
  return response.data;
}

async function getFeed(
  params?: PageParams
): Promise<PageAPI<PostApiWithDetails>> {
  const response = await api.get<PageAPI<PostApiWithDetails>>("post/feed", {
    params,
  });
  return response.data;
}

async function addView(post_id: number): Promise<Pick<Post, "views">> {
  const response = await api.post<Pick<Post, "views">>(`post/${post_id}/view`);
  return response.data;
}

async function getSuggestion(): Promise<PostApiWithDetails[]> {
  const response = await api.get<PostApiWithDetails[]>("post/suggestion");

  return response.data;
}

async function getPostsByCategorySlug(
  categorySlug: string,
  { page, per_page }: PageParams
): Promise<PageAPI<PostApiWithDetails>> {
  const response = await api.get<PageAPI<PostApiWithDetails>>(
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

async function create(formData: FormData): Promise<PostApi> {
  const response = await api.post<PostApi>("post", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export const postApi = {
  getList,
  getFeed,
  getBySlug,
  getSuggestion,
  addView,
  getPostsByCategorySlug,
  create,
};
