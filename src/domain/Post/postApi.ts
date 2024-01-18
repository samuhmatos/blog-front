import { PageAPI, PagePaginationParams, apiClient } from "@api";
import { PostApi, PostApiWithDetails, PostListApi } from "./postTypes";

const PATH = "post";

async function getOne(slugOrId: string): Promise<PostApiWithDetails> {
  const api = await apiClient();

  const response = await api.get<PostApiWithDetails>(
    `${PATH}/filter/${slugOrId}`
  );
  return response.data;
}

async function getList(
  query: keyof PostListApi
): Promise<PostApiWithDetails[]> {
  const api = await apiClient();

  const response = await api.get<PostApiWithDetails[]>(
    `${PATH}?category=${query}`
  );
  return response.data;
}

async function getFeed(
  params?: PagePaginationParams & { category?: string }
): Promise<PageAPI<PostApiWithDetails>> {
  const api = await apiClient();

  const response = await api.get<PageAPI<PostApiWithDetails>>(
    `${PATH}/paginate`,
    {
      params,
    }
  );

  return response.data;
}

async function getDraft(
  params?: PagePaginationParams & { category?: string }
): Promise<PageAPI<PostApiWithDetails>> {
  const api = await apiClient();

  const response = await api.get<PageAPI<PostApiWithDetails>>(
    `${PATH}/paginate/draft`,
    {
      params,
    }
  );
  return response.data;
}

async function getTrash(
  params?: PagePaginationParams & { category?: string }
): Promise<PageAPI<PostApiWithDetails>> {
  const api = await apiClient();

  const response = await api.get<PageAPI<PostApiWithDetails>>(
    `${PATH}/paginate/trash`,
    {
      params,
    }
  );
  return response.data;
}

async function addView(post_id: number): Promise<Pick<PostApi, "views">> {
  const api = await apiClient();

  const response = await api.post<Pick<PostApi, "views">>(
    `${PATH}/${post_id}/view`
  );
  return response.data;
}

async function getSuggestion(): Promise<PostApiWithDetails[]> {
  const api = await apiClient();

  const response = await api.get<PostApiWithDetails[]>(`${PATH}/suggestion`);

  return response.data;
}

async function create(formData: FormData): Promise<PostApi> {
  const api = await apiClient();

  const response = await api.post<PostApi>(PATH, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

interface UpdateProps {
  title: string;
  sub_title: string;
  content: string;
  category_id: number;
  is_draft: boolean;
  img_content_list: string[] | null;
}
async function update(
  post_id: number,
  formData: FormData | UpdateProps
): Promise<PostApi> {
  const api = await apiClient();

  let params;
  let headers;

  if (formData instanceof FormData) {
    params = formData;
    headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  } else {
    params = { ...formData };
    headers = {};
  }

  const response = await api.put<PostApi>(
    `${PATH}/${post_id}`,
    params,
    headers
  );

  return response.data;
}

async function remove(post_id: number): Promise<void> {
  const api = await apiClient();

  await api.delete(`${PATH}/${post_id}`);
}

async function restore(post_id: number): Promise<PostApi> {
  const api = await apiClient();

  const response = await api.post<PostApi>(`${PATH}/${post_id}/restore`);
  return response.data;
}

export type ReturnUploadPostContent = {
  url: string;
};
async function uploadPostContent(
  content: FormData
): Promise<ReturnUploadPostContent> {
  const api = await apiClient();

  const response = await api.post<ReturnUploadPostContent>(
    `${PATH}/upload-content`,
    content,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
}

export const postApi = {
  getList,
  getFeed,
  getDraft,
  getTrash,
  getOne,
  getSuggestion,
  addView,
  create,
  update,
  remove,
  restore,
  uploadPostContent,
};
