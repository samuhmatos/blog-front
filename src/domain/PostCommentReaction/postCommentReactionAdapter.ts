import { PostCommentReaction, PostCommentReactionApi } from ".";
function toPostCommentReaction(
  postReactionApi: PostCommentReactionApi
): PostCommentReaction {
  return {
    reaction: {
      id: postReactionApi.reaction.id,
      commentId: postReactionApi.reaction.comment_id,
      type: postReactionApi.reaction.type,
      userId: postReactionApi.reaction.user_id,
    },
    count: {
      like: postReactionApi.count.like,
      unlike: postReactionApi.count.unlike,
    },
  };
}

export const postCommentReactionAdapter = {
  toPostCommentReaction,
};
