import { ReactionType } from "@types";
export interface PostCommentReactionApi {
  reaction: {
    type: ReactionType;
    comment_id: number;
    id: number;
    user_id: number;
  };
  count: PostCommentReactionCount;
}

export interface PostCommentReaction {
  reaction: {
    type: ReactionType;
    commentId: number;
    userId: number;
    id: number;
  };
  count: PostCommentReactionCount;
}

interface PostCommentReactionCount {
  like: number;
  unlike: number;
}
