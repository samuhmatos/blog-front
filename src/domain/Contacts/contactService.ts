import { ContactParamsProps, contactApi } from "./contactApi";
async function create(params: ContactParamsProps): Promise<void> {
  return contactApi.create(params);
}

export const contactService = {
  create,
};
