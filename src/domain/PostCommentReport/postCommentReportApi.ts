import { apiClient } from "@api";import { PostCommentReportParamsApi } from ".";

async function create({
  comment_id,
  post_id,
  reason,
}: PostCommentReportParamsApi): Promise<void> {
  const api = await apiClient();

  await api.post(`post/${post_id}/comment/${comment_id}/report`, {
    reason,
  });
  return;
}

export const postCommentReportApi = {
  create,
};
