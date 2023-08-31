import { UserApi, UserParams } from ".";
import { AuthAPI, api } from "@api";

async function login(
  params: Pick<UserParams, "email" | "password">
): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("login", {
    ...params,
  });

  return response.data;
}

async function register(params: UserParams): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("register", {
    ...params,
  });

  return response.data;
}

async function logout(): Promise<number> {
  const response = await api.delete("logout");
  return response.status;
}

export const userApi = {
  login,
  register,
  logout,
};
