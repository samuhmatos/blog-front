import { Page, PageAPI, PagePaginationParams, api } from "@api";import { CategoryAPI } from "./categoryTypes";

const PATH = "postCategory/";

async function getPopular(): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(`${PATH}filter/popular`);
  return response.data;
}

async function paginate(
  params: PagePaginationParams & { category?: string }
): Promise<PageAPI<CategoryAPI>> {
  const response = await api.get<PageAPI<CategoryAPI>>(`${PATH}paginate`, {
    params: {
      ...params,
    },
  });

  return response.data;
}

async function show(categoryId: number): Promise<CategoryAPI> {
  const response = await api.get<CategoryAPI>(`${PATH}get/${categoryId}`);
  return response.data;
}

async function getAll(): Promise<CategoryAPI[]> {
  const response = await api.get<CategoryAPI[]>(PATH);

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

async function remove(id: number): Promise<void> {
  const response = await api.delete(PATH + id);

  return;
}

async function update(
  categoryId: number,
  params: Pick<CategoryAPI, "name" | "description">
): Promise<CategoryAPI> {
  const response = await api.put<CategoryAPI>(PATH + categoryId, {
    ...params,
  });

  return response.data;
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

//TODO: SCREEN TO UNSUBSCRIBE FROM NEWSLETTER
