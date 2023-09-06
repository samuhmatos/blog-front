export interface PostCommentReactionApi {
  type: "LIKE" | "UNLIKE";
  comment_id: number;
}

export interface PostCommentReaction {
  type: "LIKE" | "UNLIKE";
  commentId: number;
}

export type PostCommentReactionType = PostCommentReaction["type"];
