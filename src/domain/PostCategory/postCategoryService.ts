import { Category } from "./categoryTypes";
import { postCategoryApi } from "./postCategoryApi";
import { postCategoryAdapter } from "./postCategoryAdapter";
import { Page, PagePaginationParams, apiAdapter } from "@api";

async function getPopular(limit?: number): Promise<Category[]> {
  const postCategoryPageAPI = await postCategoryApi.getPopular(limit || 5);

  return postCategoryPageAPI.map(postCategoryAdapter.toCategory);
}

async function show(slugOrId: number | string): Promise<Category> {
  const categoryAPI = await postCategoryApi.show(slugOrId);

  return postCategoryAdapter.toCategory(categoryAPI);
}

async function paginate(
  params: PagePaginationParams & { category?: string }
): Promise<Page<Category>> {
  const categoryAPI = await postCategoryApi.paginate(params);

  return {
    data: categoryAPI.data.map(postCategoryAdapter.toCategory),
    meta: apiAdapter.toMetaDataPage(categoryAPI.meta),
  };
}

async function getAll(): Promise<Category[]> {
  const categoryAPI = await postCategoryApi.getAll();

  return categoryAPI.map(postCategoryAdapter.toCategory);
}

async function create(
  params: Pick<Category, "name" | "description">
): Promise<Category> {
  const categoryAPI = await postCategoryApi.create({
    ...params,
  });

  return postCategoryAdapter.toCategory(categoryAPI);
}

async function remove(categoryId: number): Promise<void> {
  const categoryAPI = await postCategoryApi.remove(categoryId);

  return;
}

async function update(
  categoryId: number,
  params: Pick<Category, "name" | "description">
): Promise<Category> {
  const categoryAPI = await postCategoryApi.update(categoryId, params);

  return postCategoryAdapter.toCategory(categoryAPI);
}

export const postCategoryService = {
  getPopular,
  show,
  paginate,
  create,
  update,
  remove,
  getAll,
};
