import { newsletterAdapter } from "./newsletterAdapter";
import { newsletterApi } from "./newsletterApi";
import { Newsletter } from "./newsletterTypes";

async function create(email: string): Promise<Newsletter> {
  const newsletterAPI = await newsletterApi.create(email);

  return newsletterAdapter.toNewsletter(newsletterAPI);
}

async function remove(
  params: Pick<Newsletter, "email" | "token">
): Promise<void> {
  return await newsletterApi.remove(params);
}

export const newsletterService = {
  create,
  remove,
};
