import { api } from "@api";import { NewsletterApi } from "./newsletterTypes";

const PATH = `newsletter/`;

async function create(email: string): Promise<NewsletterApi> {
  const response = await api.post<NewsletterApi>(PATH, {
    email,
  });

  return response.data;
}

async function remove({
  email,
  token,
}: Pick<NewsletterApi, "email" | "token">): Promise<void> {
  const response = await api.delete(`${PATH + email}?token=${token}`);

  return;
}

export const newsletterApi = {
  create,
  remove,
};
