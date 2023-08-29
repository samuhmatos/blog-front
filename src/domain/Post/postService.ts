import { Page, apiAdapter } from "@api";import { Post, PostList } from "./postTypes";
import { postApi } from "./postApi";
import { postAdapter } from "./postAdapter";

async function getList(query: keyof PostList): Promise<Post[]> {
  const postList = await postApi.getList(query);

  return postList.map(postAdapter.toPost);
}

async function getFeed(page: number, search?: string): Promise<Page<Post>> {
  const postPageAPI = await postApi.getFeed({ page, per_page: 10, search });

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function getBySlug(
  categorySlug: string,
  postSlug: string
): Promise<Post> {
  const postAPI = await postApi.getBySlug(categorySlug, postSlug);

  return postAdapter.toPost(postAPI);
}

export const postService = {
  getFeed,
  getList,
  getBySlug,
};
