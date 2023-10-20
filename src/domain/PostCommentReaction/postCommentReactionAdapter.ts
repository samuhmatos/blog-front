import {  PostCommentReaction,
  PostCommentReactionApi,
  PostCommentReactionWithCount,
  PostCommentReactionWithCountApi,
} from ".";
function toPostCommentReaction(
  postReactionApi: PostCommentReactionApi
): PostCommentReaction {
  return {
    id: postReactionApi.id,
    commentId: postReactionApi.comment_id,
    type: postReactionApi.type,
    userId: postReactionApi.user_id,
  };
}

function toPostCommentReactionWithCount(
  postReactionApi: PostCommentReactionWithCountApi
): PostCommentReactionWithCount {
  return {
    reaction: toPostCommentReaction(postReactionApi["reaction"]),
    count: {
      like: postReactionApi.count.like,
      unlike: postReactionApi.count.unlike,
    },
  };
}

export const postCommentReactionAdapter = {
  toPostCommentReaction,
  toPostCommentReactionWithCount,
};
