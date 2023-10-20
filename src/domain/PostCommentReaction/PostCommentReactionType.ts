import { ReactionType } from "@types";
export interface PostCommentReactionWithCountApi {
  reaction: PostCommentReactionApi;
  count: PostCommentReactionCount;
}

export interface PostCommentReactionWithCount {
  reaction: PostCommentReaction;
  count: PostCommentReactionCount;
}

export interface PostCommentReaction {
  type: ReactionType;
  commentId: number;
  userId: number;
  id: number;
}

export interface PostCommentReactionApi {
  type: ReactionType;
  comment_id: number;
  id: number;
  user_id: number;
}

interface PostCommentReactionCount {
  like: number;
  unlike: number;
}
