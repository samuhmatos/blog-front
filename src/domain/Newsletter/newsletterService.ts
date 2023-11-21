import { newsletterApi } from "./newsletterApi";
import { Newsletter } from "./newsletterTypes";

async function create(email: string): Promise<void> {
  return await newsletterApi.create(email);
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
