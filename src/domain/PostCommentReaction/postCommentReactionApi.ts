import {
  PostCommentReactionApi,
  PostCommentReactionWithCountApi,
} from "./PostCommentReactionType";
import { api } from "@api";

const PATH = (comment_id: number) => `/comment/${comment_id}/`;

async function create({
  type,
  comment_id,
}: Pick<
  PostCommentReactionApi,
  "comment_id" | "type"
>): Promise<PostCommentReactionWithCountApi> {
  const response = await api.post<PostCommentReactionWithCountApi>(
    `${PATH(comment_id)}reaction`,
    {
      type,
    }
  );

  return response.data;
}

async function show(comment_id: number): Promise<PostCommentReactionApi> {
  const response = await api.get<PostCommentReactionApi>(
    `${PATH(comment_id)}reaction`
  );
  return response.data;
}

async function destroy(comment_id: number): Promise<void> {
  const response = await api.delete(`${PATH(comment_id)}reaction`);

  return;
}

export const postCommentReactionApi = {
  create,
  destroy,
  show,
};
