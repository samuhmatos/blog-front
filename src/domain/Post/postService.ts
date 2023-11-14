import { Page, PagePaginationParams, apiAdapter } from "@api";
import { Post, PostList, PostWithDetails, UpdatePostParams } from "./postTypes";
import { ReturnUploadPostContent, postApi } from "./postApi";
import { postAdapter } from "./postAdapter";
import { CreatePostSchema } from "../../app/(dashboard)/dashboard/posts/schemas";

async function getList(query: keyof PostList): Promise<PostWithDetails[]> {
  const postList = await postApi.getList(query);

  return postList.map(postAdapter.toPostWithDetails);
}

async function getFeed({
  page,
  per_page = 10,
  search,
  category,
}: PagePaginationParams & { category?: string }): Promise<
  Page<PostWithDetails>
> {
  const postPageAPI = await postApi.getFeed({
    page,
    per_page,
    search,
    category,
  });

  return {
    data: postPageAPI.data.map(postAdapter.toPostWithDetails),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function getDraft({
  page,
  per_page = 10,
  search,
}: PagePaginationParams & { category?: string }): Promise<
  Page<PostWithDetails>
> {
  const postPageAPI = await postApi.getDraft({
    page,
    per_page,
    search,
  });

  return {
    data: postPageAPI.data.map(postAdapter.toPostWithDetails),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function getTrash({
  page,
  per_page = 10,
  search,
}: PagePaginationParams & { category?: string }): Promise<
  Page<PostWithDetails>
> {
  const postPageAPI = await postApi.getTrash({
    page,
    per_page,
    search,
  });

  return {
    data: postPageAPI.data.map(postAdapter.toPostWithDetails),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function getOne(slugOrID: string): Promise<PostWithDetails> {
  const postAPI = await postApi.getOne(slugOrID);

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

async function create(formData: FormData): Promise<Post> {
  const postAPI = await postApi.create(formData);
  return postAdapter.toPost(postAPI);
}

export interface UpdateServiceProps extends Omit<CreatePostSchema, "image"> {
  isDraft: boolean;
}

async function update({ postId, formData }: UpdatePostParams): Promise<Post> {
  const postAPI = await postApi.update(
    postId,
    formData instanceof FormData
      ? formData
      : {
          category_id: Number(formData.category),
          content: formData.content,
          title: formData.title,
          sub_title: formData.subTitle,
          is_draft: formData.isDraft,
        }
  );
  return postAdapter.toPost(postAPI);
}

async function remove(postId: number): Promise<void> {
  const postAPI = await postApi.remove(postId);
  return postAPI;
}

async function restore(postId: number): Promise<Post> {
  const postAPI = await postApi.restore(postId);
  return postAdapter.toPost(postAPI);
}

async function uploadPostContent(
  content: FormData
): Promise<ReturnUploadPostContent> {
  return postApi.uploadPostContent(content);
}

export const postService = {
  getFeed,
  getList,
  getTrash,
  getOne,
  getSuggestion,
  addView,
  create,
  getDraft,
  update,
  remove,
  restore,
  uploadPostContent,
};
