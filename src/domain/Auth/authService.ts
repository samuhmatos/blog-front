import { PasswordResetSchema } from "@schema";
import { authApi } from "./authApi";
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

export const authService = {
  forgotPassword,
  passwordReset,
};
