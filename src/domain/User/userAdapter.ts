import { User, UserApi } from ".";
import { Auth, AuthAPI } from "@api";
import { dateUtils } from "@utils";

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

function toAuthResponse(authAPI: AuthAPI): Auth {
  return {
    user: toUser(authAPI.user),
    token: authAPI.token,
    CSRF: authAPI.CSRF,
  };
}

export const userAdapter = {
  toAuthResponse,
  toUser,
};
