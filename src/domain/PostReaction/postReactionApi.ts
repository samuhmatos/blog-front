import { apiClient } from "@api";import { PostReactionApi } from "./postReactionType";

const PATH = (post_id: number) => `post/${post_id}/reaction`;

async function addReaction({
  post_id,
  type,
}: Omit<PostReactionApi, "user_id">): Promise<PostReactionApi> {
  const api = await apiClient();

  const response = await api.post<PostReactionApi>(PATH(post_id), {
    type,
  });

  return response.data;
}

async function getReaction(post_id: number): Promise<PostReactionApi> {
  const api = await apiClient();

  const response = await api.get<PostReactionApi>(PATH(post_id));

  return response.data;
}

async function deleteReaction(post_id: number): Promise<void> {
  const api = await apiClient();

  const response = await api.delete<PostReactionApi>(PATH(post_id));

  return;
}

export const postReactionApi = {
  getReaction,
  addReaction,
  deleteReaction,
};
