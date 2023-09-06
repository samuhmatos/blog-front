import { PostCommentReaction, PostCommentReactionApi } from ".";
function toPostCommentReaction(
  postReactionApi: PostCommentReactionApi
): PostCommentReaction {
  return {
    commentId: postReactionApi.comment_id,
    type: postReactionApi.type,
  };
}

export const postCommentReactionAdapter = {
  toPostCommentReaction,
};
