import { AuthAPI, api } from "@api";
import { BASE_URL, LOCAL_URL_API } from "@config";

import { ForgotPasswordParamApi } from "./authTypes";
import { UserApi, UserAuthParams } from "../User";

const PATH = "auth/";
const TOKEN_PATH = "/token";

async function forgotPassword(email: string): Promise<{ status: string }> {
  const response = await api.post(`${PATH}forgot-password`, {
    email,
  });

  return response.data;
}

async function passwordReset(
  params: ForgotPasswordParamApi
): Promise<{ status: string }> {
  const response = await api.post<{ status: string }>(`${PATH}reset-password`, {
    ...params,
  });

  return response.data;
}

async function currentUser(): Promise<UserApi> {
  const response = await api.get<UserApi>(`user/me`);

  return response.data;
}

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>(`${PATH}login`, {
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

async function getToken(): Promise<string> {
  const response = await api.get<string>(TOKEN_PATH, {
    baseURL: LOCAL_URL_API,
  });

  return response.data;
}

async function setToken(token: string): Promise<void> {
  await api.post<{ token: string }>(
    TOKEN_PATH,
    { token },
    {
      baseURL: LOCAL_URL_API,
    }
  );

  return;
}

async function removeToken(): Promise<void> {
  await api.delete(TOKEN_PATH, {
    baseURL: LOCAL_URL_API,
  });

  return;
}

export const authApi = {
  forgotPassword,
  passwordReset,
  currentUser,
  login,
  CSRF_token,
  getToken,
  setToken,
  removeToken,
};

// TODO: VALIDAR SE EMAIL ESTA VERIFICADO PARA TER ACESSO A ALGUMAS FUNÇÕES
