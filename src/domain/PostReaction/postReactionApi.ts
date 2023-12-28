import { PostReactionApi } from "./postReactionType";
import { api } from "@api";

const PATH = (post_id: number) => `post/${post_id}/reaction`;

async function addReaction({
  post_id,
  type,
}: Omit<PostReactionApi, "user_id">): Promise<PostReactionApi> {
  const response = await api.post<PostReactionApi>(PATH(post_id), {
    type,
  });

  return response.data;
}

async function getReaction(post_id: number): Promise<PostReactionApi> {
  const response = await api.get<PostReactionApi>(PATH(post_id));

  return response.data;
}

async function deleteReaction(post_id: number): Promise<void> {
  const response = await api.delete<PostReactionApi>(PATH(post_id));

  return;
}

export const postReactionApi = {
  getReaction,
  addReaction,
  deleteReaction,
};
