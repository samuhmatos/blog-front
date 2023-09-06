import { PostCommentApi, PostCommentParamsApi } from ".";
import { api } from "@api";

interface ParamsProps extends Omit<PostCommentParamsApi, "parent_id"> {
  comment_id: number;
}

async function report(
  post_id: number,
  comment_id: number,
  reason: string
): Promise<void> {
  const response = await api.post(
    `post/${post_id}/comment/${comment_id}/report`,
    {
      reason,
    }
  );
  return;
}

async function edit({
  comment,
  post_id,
  comment_id,
}: ParamsProps): Promise<PostCommentApi> {
  const response = await api.patch<PostCommentApi>(
    `post/${post_id}/comment/${comment_id}`,
    {
      comment,
    }
  );

  return response.data;
}

async function destroy({
  post_id,
  comment_id,
}: Omit<ParamsProps, "comment">): Promise<void> {
  const response = await api.delete(`post/${post_id}/comment/${comment_id}`);
  return;
}

async function create({
  comment,
  post_id,
  parent_id,
}: PostCommentParamsApi): Promise<PostCommentApi> {
  const response = await api.post<PostCommentApi>(`post/${post_id}/comment`, {
    comment,
    parent_id,
  });

  return response.data;
}

export const postCommentApi = {
  create,
  edit,
  destroy,
  report,
};
