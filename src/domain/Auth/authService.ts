import { authApi } from "./authApi";import { User, UserAuthParams, userAdapter } from "../User";
import { PasswordResetSchema } from "../../app/auth/password-reset/[hash]/passwordResetSchema";
import { Auth } from "@api";
import { apiServer } from "@/api/config/apiServer";

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

async function getToken(): Promise<string> {
  return await authApi.getToken();
}

async function setToken(token: string): Promise<void> {
  return await authApi.setToken(token);
}

async function removeToken(): Promise<void> {
  return await authApi.removeToken();
}

async function register(params: UserAuthParams): Promise<User> {
  const registered = await authApi.register(params);

  return userAdapter.toUser(registered.user);
}

export const authService = {
  forgotPassword,
  passwordReset,
  currentUser,
  login,
  CSRF_token,
  setToken,
  getToken,
  register,
  removeToken,
};
