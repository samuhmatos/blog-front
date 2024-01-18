import { apiClient } from "@api";
export interface ContactParamsProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

async function create(params: ContactParamsProps): Promise<void> {
  const api = await apiClient();

  await api.post("contact", {
    ...params,
  });

  return;
}

export const contactApi = {
  create,
};
