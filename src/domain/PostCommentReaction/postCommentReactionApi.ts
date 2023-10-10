import { PostCommentReactionApi } from "./PostCommentReactionType";
import { api } from "@api";

async function create({
  type,
  comment_id,
}: Pick<
  PostCommentReactionApi["reaction"],
  "comment_id" | "type"
>): Promise<PostCommentReactionApi> {
  const response = await api.post<PostCommentReactionApi>(
    `comment/${comment_id}/reaction`,
    {
      type,
    }
  );

  return response.data;
}

async function destroy(comment_id: number): Promise<void> {
  const response = await api.delete(`comment/${comment_id}/reaction`);

  return;
}

export const postCommentReactionApi = {
  create,
  destroy,
};
