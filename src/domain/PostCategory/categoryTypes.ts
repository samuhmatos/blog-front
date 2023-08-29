export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  templateId: number;
  createdAt: string;
  createdAtFormatted: string;
  postsCount?: number;
}

export interface CategoryAPI {
  id: number;
  name: string;
  slug: string;
  description: string;
  template_id: number;
  created_at: string;
  updated_at: string;
  posts_count?: number;
}
