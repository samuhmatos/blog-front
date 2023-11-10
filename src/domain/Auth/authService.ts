import { authApi } from "./authApi";
import { User, UserAuthParams, userAdapter } from "../User";
import { PasswordResetSchema } from "../../app/auth/password-reset/[hash]/passwordResetSchema";
import { Auth } from "@api";

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<Auth> {
  const auth = await authApi.login(params);

  return userAdapter.toAuthResponse(auth);
}

async function forgotPassword(email: string): Promise<{ status: string }> {
  return await authApi.forgotPassword(email);
}

async function passwordReset(
  params: PasswordResetSchema
): Promise<{ status: string }> {
  return await authApi.passwordReset({
    ...params,
    password_confirmation: params.confirmPassword,
  });
}

async function currentUser(): Promise<User> {
  const userAPI = await authApi.currentUser();

  return userAdapter.toUser(userAPI);
}

async function CSRF_token(): Promise<void> {
  return authApi.CSRF_token();
}

export const authService = {
  forgotPassword,
  passwordReset,
  currentUser,
  login,
  CSRF_token,
};
