import {  PaginateCommentWithReportsApi,
  PostCommentApi,
  PostCommentParamsApi,
} from ".";
import { PageAPI, apiClient } from "@api";

interface ParamsProps extends Omit<PostCommentParamsApi, "parent_id"> {
  comment_id: number;
}

const PATH = "comment";

async function edit({
  comment,
  post_id,
  comment_id,
}: ParamsProps): Promise<PostCommentApi> {
  const api = await apiClient();

  const response = await api.patch<PostCommentApi>(`${PATH}/${comment_id}`, {
    comment,
  });

  return response.data;
}

async function destroy({
  post_id,
  comment_id,
}: Omit<ParamsProps, "comment">): Promise<void> {
  const api = await apiClient();

  await api.delete(`${PATH}/${comment_id}`);
}

async function create({
  comment,
  post_id,
  parent_id,
}: PostCommentParamsApi): Promise<PostCommentApi> {
  const api = await apiClient();

  const response = await api.post<PostCommentApi>(PATH, {
    comment,
    parent_id,
    post_id,
  });

  return response.data;
}

async function paginateWithReports(
  params: PaginateCommentWithReportsApi
): Promise<PageAPI<PostCommentApi>> {
  const api = await apiClient();

  const res = await api.get<PageAPI<PostCommentApi>>("comment/report", {
    params,
  });

  return res.data;
}

export const postCommentApi = {
  create,
  edit,
  destroy,
  paginateWithReports,
};
