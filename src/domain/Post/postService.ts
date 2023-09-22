import { Page, PageParams, apiAdapter } from "@api";
import { Post, PostList, PostWithDetails } from "./postTypes";
import { postApi } from "./postApi";
import { postAdapter } from "./postAdapter";

async function getList(query: keyof PostList): Promise<PostWithDetails[]> {
  const postList = await postApi.getList(query);

  return postList.map(postAdapter.toPostWithDetails);
}

async function getFeed({
  page,
  per_page = 10,
  search,
}: PageParams): Promise<Page<PostWithDetails>> {
  const postPageAPI = await postApi.getFeed({ page, per_page, search });

  return {
    data: postPageAPI.data.map(postAdapter.toPostWithDetails),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function getBySlug(postSlug: string): Promise<PostWithDetails> {
  const postAPI = await postApi.getBySlug(postSlug);

  return postAdapter.toPostWithDetails(postAPI);
}

async function getSuggestion(): Promise<PostWithDetails[]> {
  const postAPI = await postApi.getSuggestion();

  return postAPI.map(postAdapter.toPostWithDetails);
}

async function addView(
  postId: number
): Promise<Pick<PostWithDetails, "views">> {
  return await postApi.addView(postId);
}

async function getPostsByCategorySlug(
  categorySlug: string,
  page: number
): Promise<Page<PostWithDetails>> {
  const postsAPI = await postApi.getPostsByCategorySlug(categorySlug, {
    page,
    per_page: 10,
  });

  return {
    data: postsAPI.data.map(postAdapter.toPostWithDetails),
    meta: apiAdapter.toMetaDataPage(postsAPI.meta),
  };
}

async function create(formData: FormData): Promise<Post> {
  const postAPI = await postApi.create(formData);
  return postAdapter.toPost(postAPI);
}

export const postService = {
  getFeed,
  getList,
  getBySlug,
  getSuggestion,
  addView,
  getPostsByCategorySlug,
  create,
};
