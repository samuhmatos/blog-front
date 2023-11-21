import { PageAPI, PagePaginationParams, api } from "@api";import { CategoryAPI } from "./categoryTypes";

const PATH = "category/";

async function getPopular(limit: number): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(
    `${PATH}filter/popular?limit=${limit}`
  );
  return response.data;
}

async function paginate(
  params: PagePaginationParams
): Promise<PageAPI<CategoryAPI>> {
  const response = await api.get<PageAPI<CategoryAPI>>(PATH, {
    params: {
      ...params,
    },
  });

  return response.data;
}

async function show(slugOrId: number | string): Promise<CategoryAPI> {
  const response = await api.get<CategoryAPI>(`${PATH}get/${slugOrId}`);
  return response.data;
}

async function getAll(): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(`${PATH}all`);

  return response.data;
}

async function create(
  params: Pick<CategoryAPI, "name" | "description">
): Promise<CategoryAPI> {
  const response = await api.post<CategoryAPI>(PATH, {
    ...params,
  });

  return response.data;
}

async function remove(categoryId: number): Promise<void> {
  await api.delete(PATH + categoryId);
}

async function update(
  categoryId: number,
  params: Pick<CategoryAPI, "name" | "description">
): Promise<void> {
  await api.put<CategoryAPI>(PATH + categoryId, {
    ...params,
  });
}

export const postCategoryApi = {
  getPopular,
  show,
  paginate,
  create,
  remove,
  update,
  getAll,
};
