import { api } from "@api";
import { CategoryAPI } from "./categoryTypes";

async function getPopular(): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(`category/popular`);
  return response.data;
}

export const postCategoryApi = {
  getPopular,
};
