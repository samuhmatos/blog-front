import { postCommentReactionAdapter } from "./postCommentReactionAdapter";import { postCommentReactionApi } from "./postCommentReactionApi";
import {
  PostCommentReaction,
  PostCommentReactionWithCount,
} from "./PostCommentReactionType";

async function destroy(postId: number): Promise<void> {
  const reactionApi = await postCommentReactionApi.destroy(postId);

  return;
}

async function create({
  commentId,
  type,
}: Pick<
  PostCommentReaction,
  "commentId" | "type"
>): Promise<PostCommentReactionWithCount> {
  const reactionApi = await postCommentReactionApi.create({
    comment_id: commentId,
    type,
  });

  return postCommentReactionAdapter.toPostCommentReactionWithCount(reactionApi);
}

async function show(commentId: number): Promise<PostCommentReaction> {
  const reactionAPI = await postCommentReactionApi.show(commentId);

  return postCommentReactionAdapter.toPostCommentReaction(reactionAPI);
}

export const postCommentReactionService = {
  create,
  destroy,
  show,
};
