import { postReactionAdapter } from "./postReactionAdapter";
import { postReactionApi } from "./postReactionApi";
import { PostReaction } from "./postReactionType";

async function getReaction(postId: number): Promise<PostReaction> {
  const reactionApi = await postReactionApi.getReaction(postId);

  return postReactionAdapter.toPostReaction(reactionApi);
}

async function deleteReaction(postId: number): Promise<void> {
  const reactionApi = await postReactionApi.deleteReaction(postId);

  return;
}

async function addReaction({
  postId,
  type,
}: Omit<PostReaction, "userId">): Promise<PostReaction> {
  const reactionApi = await postReactionApi.addReaction({
    post_id: postId,
    type,
  });

  return postReactionAdapter.toPostReaction(reactionApi);
}

export const postReactionService = {
  getReaction,
  addReaction,
  deleteReaction,
};
