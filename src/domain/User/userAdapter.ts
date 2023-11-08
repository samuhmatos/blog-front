import { User, UserApi, UserPagination, UserPaginationApi } from ".";import { Auth, AuthAPI } from "@api";
import { dateUtils } from "@utils";
import { newsletterAdapter } from "../Newsletter/newsletterAdapter";

function toUser(userAPI: UserApi): User {
  return {
    id: userAPI.id,
    name: userAPI.name,
    email: userAPI.email,
    username: userAPI.username,
    description: userAPI.description,
    isAdmin: userAPI.is_admin,
    imageURL: userAPI.image_url,
    createdAt: userAPI.created_at,
    createdAtFormatted: dateUtils.formatDefault(userAPI.created_at),
  };
}

function toUserPagination(userAPI: UserPaginationApi): UserPagination {
  return {
    ...toUser(userAPI),
    newsletter: newsletterAdapter.toNullableNewsletter(userAPI.newsletter),
  };
}

function toAuthResponse(authAPI: AuthAPI): Auth {
  return {
    user: toUser(authAPI.user),
    token: authAPI.token,
  };
}

export const userAdapter = {
  toAuthResponse,
  toUser,
  toUserPagination,
};
