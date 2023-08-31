export interface PostReactionApi {
  type: "LIKE" | "UNLIKE";
  user_id: number;
  post_id: number;
}

export interface PostReaction {
  type: "LIKE" | "UNLIKE";
  userId: number;
  postId: number;
}

export type ReactionType = PostReaction["type"];
