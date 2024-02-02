import { apiClient } from "@api";
import { PostCommentReportParamsApi, UpdatePostCommentReportParams } from ".";

const BASE_PATH = "/comment/report";

const path = (id: number) => `${BASE_PATH}/${id}`;

async function create(params: PostCommentReportParamsApi): Promise<void> {
  const api = await apiClient();

  await api.post(BASE_PATH, {
    ...params,
  });
}

async function update({
  id,
  status,
}: UpdatePostCommentReportParams): Promise<void> {
  const api = await apiClient();

  await api.put(path(id), {
    status,
  });
}

export const postCommentReportApi = {
  create,
  update,
};
