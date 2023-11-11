export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  createdAtFormatted: string;
  postsCount?: number;
}

export interface CategoryAPI {
  id: number;
  name: string;
  slug: string;
  description: string;
  created_at: string;
  updated_at: string;
  posts_count?: number;
}

export interface UpdateCategoryParams {
  categoryId: number;
  params: Pick<Category, "name" | "description">;
}
