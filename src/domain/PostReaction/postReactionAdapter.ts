import { PostReaction, PostReactionApi } from ".";
function toPostReaction(postReactionApi: PostReactionApi): PostReaction {
  return {
    postId: postReactionApi.post_id,
    userId: postReactionApi.user_id,
    type: postReactionApi.type,
  };
}

export const postReactionAdapter = {
  toPostReaction,
};
