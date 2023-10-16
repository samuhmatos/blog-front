import { dateUtils } from "@utils";import { Category, CategoryAPI } from "./categoryTypes";

function toCategory(postCategoryAPI: CategoryAPI): Category {
  return {
    id: postCategoryAPI.id,
    name: postCategoryAPI.name,
    description: postCategoryAPI.description,
    slug: postCategoryAPI.slug,
    postsCount: postCategoryAPI.posts_count,
    createdAt: postCategoryAPI.created_at,
    createdAtFormatted: dateUtils.formatDefault(postCategoryAPI.created_at),
  };
}
export const postCategoryAdapter = {
  toCategory,
};
