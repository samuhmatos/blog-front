import { postCommentReactionAdapter } from "./postCommentReactionAdapter";import { postCommentReactionApi } from "./postCommentReactionApi";
import { PostCommentReaction } from "./PostCommentReactionType";

async function destroy(postId: number): Promise<void> {
  const reactionApi = await postCommentReactionApi.destroy(postId);

  return;
}

async function create({
  commentId,
  type,
}: Pick<
  PostCommentReaction["reaction"],
  "commentId" | "type"
>): Promise<PostCommentReaction> {
  const reactionApi = await postCommentReactionApi.create({
    comment_id: commentId,
    type,
  });

  return postCommentReactionAdapter.toPostCommentReaction(reactionApi);
}

export const postCommentReactionService = {
  create,
  destroy,
};
