import { api } from "@api";
import { NewsletterApi } from "./newsletterTypes";

const PATH = `newsletter/`;

async function create(email: string): Promise<void> {
  const response = await api.post<NewsletterApi>(PATH, {
    email,
  });
}

async function remove({
  email,
  token,
}: Pick<NewsletterApi, "email" | "token">): Promise<void> {
  await api.delete(`${PATH + email}?token=${token}`);
}

export const newsletterApi = {
  create,
  remove,
};
