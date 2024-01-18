import { AuthAPI, apiClient } from "@api";
import { ForgotPasswordParamApi } from "./authTypes";
import { UserApi, UserAuthParams, UserRegisteredApi } from "../User";

const PATH = "auth/";
const TOKEN_PATH = "/token";
const LOCAL_URL_API = process.env.NEXT_PUBLIC_APP_URL;

async function forgotPassword(email: string): Promise<{ status: string }> {
  const api = await apiClient();

  const response = await api.post(`${PATH}forgot-password`, {
    email,
  });

  return response.data;
}

async function passwordReset(
  params: ForgotPasswordParamApi
): Promise<{ status: string }> {
  const api = await apiClient();

  const response = await api.post<{ status: string }>(`${PATH}reset-password`, {
    ...params,
  });

  return response.data;
}

async function currentUser(): Promise<UserApi> {
  const api = await apiClient();

  const response = await api.get<UserApi>(`user/me`);

  return response.data;
}

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<AuthAPI> {
  const api = await apiClient();

  const response = await api.post<AuthAPI>(`${PATH}login`, {
    ...params,
  });

  return response.data;
}

async function CSRF_token(): Promise<void> {
  const api = await apiClient();

  await api.get("sanctum/csrf-cookie", {
    baseURL: process.env.NEXT_PUBLIC_API_BASE,
  });

  return;
}

async function getToken(): Promise<string> {
  const api = await apiClient();

  const response = await api.get<string>(TOKEN_PATH, {
    baseURL: LOCAL_URL_API,
  });

  return response.data;
}

async function setToken(token: string): Promise<void> {
  const api = await apiClient();

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
  const api = await apiClient();

  await api.delete(TOKEN_PATH, {
    baseURL: LOCAL_URL_API,
  });

  return;
}

async function register(params: UserAuthParams): Promise<UserRegisteredApi> {
  const api = await apiClient();

  const response = await api.post<UserRegisteredApi>("auth/register", {
    ...params,
  });

  return response.data;
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
  register,
};

// TODO: VALIDAR SE EMAIL ESTA VERIFICADO PARA TER ACESSO A ALGUMAS FUNÇÕES
