import { PostComment, PostCommentApi } from ".";
import { dateUtils } from "@utils";
import { userAdapter } from "../User/userAdapter";

function toPostComment(postCommentAPI: PostCommentApi): PostComment {
  const postCommentParsed: PostComment = {
    id: postCommentAPI.id,
    postId: postCommentAPI.post_id,
    userId: postCommentAPI.user_id,
    comment: postCommentAPI.comment,
    parentId: postCommentAPI.parent_id,
    likeCount: postCommentAPI.like_count || 0,
    unLikeCount: postCommentAPI.unlike_count || 0,
    user: userAdapter.toUser(postCommentAPI.user),
    createdAt: postCommentAPI.created_at,
    updatedAt: postCommentAPI.updated_at,
    updatedAtFormatted: dateUtils.formatRelative(postCommentAPI.updated_at),
  };

  return {
    ...postCommentParsed,
    answers: postCommentAPI.answers?.map(toPostComment),
  };
}

export const postCommentAdapter = {
  toPostComment,
};
