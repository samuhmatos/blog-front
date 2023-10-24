import { Newsletter, NewsletterApi } from "./newsletterTypes";
function toNewsletter(newsletterAPI: NewsletterApi): Newsletter {
  return {
    id: newsletterAPI.id,
    email: newsletterAPI.email,
    token: newsletterAPI.token,
    createdAt: newsletterAPI.created_at,
    updatedAt: newsletterAPI.updated_at,
  };
}

function toNullableNewsletter(
  newsletterAPI: NewsletterApi | null
): Newsletter | null {
  if (newsletterAPI) {
    return toNewsletter(newsletterAPI);
  } else {
    return null;
  }
}

export const newsletterAdapter = {
  toNewsletter,
  toNullableNewsletter,
};
