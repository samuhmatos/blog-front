import { PageAPI, api } from "@api";
import { CategoryAPI } from "./categoryTypes";
import { PostApi } from "../Post";

async function getPopular(): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(`category/filter/popular`);
  return response.data;
}

async function show(slug: string): Promise<CategoryAPI> {
  const response = await api.get<CategoryAPI>(`category/${slug}`);
  return response.data;
}

export const postCategoryApi = {
  getPopular,
  show,
};
