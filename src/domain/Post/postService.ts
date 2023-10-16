import { Page, PagePaginationParams, apiAdapter } from "@api";import { Post, PostList, PostPageParams, PostWithDetails } from "./postTypes";
import { postApi } from "./postApi";
import { postAdapter } from "./postAdapter";
import { CreatePostSchema } from "../../app/(dashboard)/dashboard/posts/components/Post/PostSchema";

async function getList(query: keyof PostList): Promise<PostWithDetails[]> {
  const postList = await postApi.getList(query);

  return postList.map(postAdapter.toPostWithDetails);
}

async function getFeed({
  page,
  per_page = 10,
  search,
}: PagePaginationParams & { category?: string }): Promise<
  Page<PostWithDetails>
> {
  const postPageAPI = await postApi.getFeed({
    page,
    per_page,
    search,
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

// async function getPostsByCategorySlug(
//   categorySlug: string,
//   page: number
// ): Promise<Page<PostWithDetails>> {
//   const postsAPI = await postApi.getPostsByCategorySlug(categorySlug, {
//     page,
//     per_page: 10,
//   });

//   return {
//     data: postsAPI.data.map(postAdapter.toPostWithDetails),
//     meta: apiAdapter.toMetaDataPage(postsAPI.meta),
//   };
// }

async function create(formData: FormData): Promise<Post> {
  const postAPI = await postApi.create(formData);
  return postAdapter.toPost(postAPI);
}

export type UpdateServiceProps = Omit<CreatePostSchema, "image">;

async function update(
  postId: number,
  formData: FormData | UpdateServiceProps
): Promise<Post> {
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

export const postService = {
  getFeed,
  getList,
  getTrash,
  getOne,
  getSuggestion,
  addView,
  // getPostsByCategorySlug,
  create,
  getDraft,
  update,
  remove,
  restore,
};
