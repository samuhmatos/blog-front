import { newsletterAdapter } from "./newsletterAdapter";
import { newsletterApi } from "./newsletterApi";
import { Newsletter } from "./newsletterTypes";

async function create(email: string): Promise<Newsletter> {
  const newsletterAPI = await newsletterApi.create(email);

  return newsletterAdapter.toNewsletter(newsletterAPI);
}

export const newsletterService = {
  create,
};
