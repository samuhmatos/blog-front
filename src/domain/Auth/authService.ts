import { PasswordResetSchema } from "@schema";
import { authApi } from "./authApi";
import { User, userAdapter } from "../User";
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

export const authService = {
  forgotPassword,
  passwordReset,
  currentUser,
};
