export interface NewsletterApi {
  id: number;
  email: string;
  token: string;
  created_at: string;
  updated_at: string;
}

export interface Newsletter {
  id: number;
  email: string;
  token: string;
  createdAt: string;
  updatedAt: string;
}
