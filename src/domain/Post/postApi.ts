import { PageAPI, PageParams, api } from "@api";
import { PostApi, PostListApi } from "./postTypes";
import { post } from "./postMock";

async function getBySlug(
  categorySlug: string,
  postSlug: string
): Promise<PostApi> {
  const response = await api.get<PostApi>(`post/${categorySlug}/${postSlug}`);

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

export const postApi = {
  getList,
  getFeed,
  getBySlug,
};
