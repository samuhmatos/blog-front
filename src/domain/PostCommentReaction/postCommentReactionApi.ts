import {  PostCommentReactionApi,
  PostCommentReactionWithCountApi,
} from "./PostCommentReactionType";
import { api } from "@api";

async function create({
  type,
  comment_id,
}: Pick<
  PostCommentReactionApi,
  "comment_id" | "type"
>): Promise<PostCommentReactionWithCountApi> {
  const response = await api.post<PostCommentReactionWithCountApi>(
    `comment/${comment_id}/reaction`,
    {
      type,
    }
  );

  return response.data;
}

async function show(comment_id: number): Promise<PostCommentReactionApi> {
  const response = await api.get<PostCommentReactionApi>(
    `comment/${comment_id}/reaction`
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
  show,
};
