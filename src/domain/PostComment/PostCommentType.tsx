import { User, UserApi } from "../User";
export interface PostCommentApi {
  id: number;
  user_id: number;
  post_id: number;
  parent_id: number | null;
  comment: string;
  like_count: number | null;
  unlike_count: number | null;
  created_at: string;
  updated_at: string;
  user: UserApi;
  answers?: PostCommentApi[];
}

export interface PostComment {
  id: number;
  userId: number;
  postId: number;
  parentId: number | null;
  comment: string;
  likeCount: number;
  unLikeCount: number;
  createdAt: string;
  updatedAt: string;
  updatedAtFormatted: string;
  user: User;
  answers?: PostComment[];
}

export interface PostCommentParamsApi {
  post_id: number;
  comment: string;
  parent_id?: number;
  comment_id?: number;
}

export interface PostCommentParams {
  postId: number;
  comment: string;
  parentId?: number;
  commentId?: number;
}
