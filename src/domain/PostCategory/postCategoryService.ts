import { Category } from "./categoryTypes";
import { postCategoryApi } from "./postCategoryApi";
import { postCategoryAdapter } from "./postCategoryAdapter";

async function getPopular(): Promise<Category[]> {
  const postCategoryPageAPI = await postCategoryApi.getPopular();

  return postCategoryPageAPI.map(postCategoryAdapter.toCategory);
}

async function show(slug: string): Promise<Category> {
  const categoryAPI = await postCategoryApi.show(slug);

  return postCategoryAdapter.toCategory(categoryAPI);
}

export const postCategoryService = {
  getPopular,
  show,
};
