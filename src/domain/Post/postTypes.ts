import { Page, PageAPI, PagePaginationParams } from "@api";
import {
  Category,
  CategoryAPI,
  PostComment,
  PostCommentApi,
  User,
  UserApi,
} from "@domain";
import { UpdateServiceProps } from ".";
import { ReactionType } from "@types";

export interface Post {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  content: string;
  imageURL: string;
  views: number;
  likeCount: number | null;
  unlikeCount: number | null;
  createdAt: string;
  createdAtFormatted: string;
  isDraft: boolean;
  categoryId: number;
  userReaction: ReactionType | null;
}

export interface PostWithDetails extends Post {
  category: Category;
  author: Omit<User, "isAdmin" | "email" | "createdAt" | "createdAtFormatted">;
  comments?: PostComment[];
}

export interface PostApi {
  id: number;
  title: string;
  sub_title: string;
  slug: string;
  content: string;
  image_url: string;
  views: number;
  category_id: number;
  author_id: number;
  created_at: string;
  updated_at: string;
  like_count: number | null;
  unlike_count: number | null;
  is_draft: boolean;
  user_reaction: ReactionType | null;
}

export interface PostApiWithDetails extends PostApi {
  category: CategoryAPI;
  author: Omit<UserApi, "is_admin" | "email" | "created_at">;
  comments?: PostCommentApi[];
}

export interface PostListApi {
  feed: PageAPI<PostApiWithDetails>;
  popular: PostApiWithDetails[];
  videos: PostApiWithDetails[];
  reviews: PostApiWithDetails[];
  best: PostApiWithDetails[];
  tech: PostApiWithDetails[];
}

export interface PostList {
  feed: Page<PostWithDetails>;
  popular: PostWithDetails[];
  videos: PostWithDetails[];
  reviews: PostWithDetails[];
  best: PostWithDetails[];
  tech: PostWithDetails[];
}

export interface PostPageParams extends PagePaginationParams {
  is_draft?: boolean;
  is_trash?: boolean;
}

export interface UpdatePostParams {
  postId: number;
  formData: FormData | UpdateServiceProps;
}
