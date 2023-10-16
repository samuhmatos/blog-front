import { api } from "@api";
import { NewsletterApi } from "./newsletterTypes";

const PATH = `newsletter/`;

async function create(email: string): Promise<NewsletterApi> {
  const response = await api.post<NewsletterApi>(PATH, {
    email,
  });

  return response.data;
}

export const newsletterApi = {
  create,
};
