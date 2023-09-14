import { BASE_URL } from "@config";
import { UserAuthParams } from ".";
import { AuthAPI, api } from "@api";

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("login", {
    ...params,
  });

  return response.data;
}

async function register(params: UserAuthParams): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("register", {
    ...params,
  });

  return response.data;
}

async function logout(): Promise<number> {
  const response = await api.delete("logout");
  return response.status;
}

async function update(user_id: number, params: FormData): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>(`user/${user_id}/`, params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

async function CSRF_token(): Promise<void> {
  await api.get("sanctum/csrf-cookie", {
    baseURL: BASE_URL,
    //withCredentials: true,
  });

  return;
}

export const userApi = {
  login,
  register,
  logout,
  update,
  CSRF_token,
};
