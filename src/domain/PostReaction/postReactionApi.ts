import { PostReactionApi } from "./postReactionType";import { api } from "@api";

async function addReaction({
  post_id,
  type,
}: Omit<PostReactionApi, "user_id">): Promise<PostReactionApi> {
  const response = await api.post<PostReactionApi>(`post/${post_id}/reaction`, {
    type,
  });

  return response.data;
}

async function getReaction(post_id: number): Promise<PostReactionApi> {
  const response = await api.get<PostReactionApi>(`post/${post_id}/reaction`);

  return response.data;
}

async function deleteReaction(post_id: number): Promise<void> {
  const response = await api.delete<PostReactionApi>(
    `post/${post_id}/reaction`
  );

  return;
}

export const postReactionApi = {
  getReaction,
  addReaction,
  deleteReaction,
};
