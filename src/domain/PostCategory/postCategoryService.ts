import { Category, CategoryAPI } from "./categoryTypes";
import { postCategoryApi } from "./postCategoryApi";
import { postCategoryAdapter } from "./postCategoryAdapter";

async function getPopular(): Promise<Category[]> {
  const postCategoryPageAPI = await postCategoryApi.getPopular();

  return postCategoryPageAPI.map(postCategoryAdapter.toCategory);
}

export const postCategoryService = {
  getPopular,
};
