import { Page, PageAPI } from "@api";
import { Category, CategoryAPI } from "../PostCategory/categoryTypes";
import { User, UserApi } from "../User";

export interface Post {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  content: string;
  imageURL: string;
  views: number;
  category: Category;
  likeCount: number | null;
  unlikeCount: number | null;
  author: Omit<User, "isAdmin" | "email" | "createdAt" | "createdAtFormatted">;
  createdAt: string;
  createdAtFormatted: string;
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
  category: CategoryAPI;
  like_count: number | null;
  unlike_count: number | null;
  author: Omit<UserApi, "isAdmin" | "email" | "created_at">;
}

export interface PostListApi {
  feed: PageAPI<PostApi>;
  popular: PostApi[];
  videos: PostApi[];
  reviews: PostApi[];
  best: PostApi[];
  tech: PostApi[];
}

export interface PostList {
  feed: Page<Post>;
  popular: Post[];
  videos: Post[];
  reviews: Post[];
  best: Post[];
  tech: Post[];
}
