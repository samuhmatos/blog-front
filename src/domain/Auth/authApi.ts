import { AuthAPI, api } from "@api";
import { BASE_URL } from "@config";

import { ForgotPasswordParamApi } from "./authTypes";
import { UserApi, UserAuthParams } from "../User";

async function forgotPassword(email: string): Promise<{ status: string }> {
  const response = await api.post("forgot-password", {
    email,
  });

  return response.data;
}

async function passwordReset(
  params: ForgotPasswordParamApi
): Promise<{ status: string }> {
  const response = await api.post<{ status: string }>("reset-password", {
    ...params,
  });

  return response.data;
}

async function currentUser(): Promise<UserApi> {
  const response = await api.get<UserApi>("user/me");

  return response.data;
}

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("login", {
    ...params,
  });

  return response.data;
}

async function CSRF_token(): Promise<void> {
  await api.get("sanctum/csrf-cookie", {
    baseURL: BASE_URL,
  });

  return;
}

export const authApi = {
  forgotPassword,
  passwordReset,
  currentUser,
  login,
  CSRF_token,
};

// TODO: VALIDAR SE EMAIL ESTA VERIFICADO PARA TER ACESSO A ALGUMAS FUNÇÕES
