import { ReactionType } from "@types";
export interface PostReactionApi {
  type: ReactionType;
  user_id: number;
  post_id: number;
}

export interface PostReaction {
  type: ReactionType;
  userId: number;
  postId: number;
}
