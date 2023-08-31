import { UserParams } from ".";
import { Auth } from "@api";
import { userApi } from "./userApi";
import { userAdapter } from "./userAdapter";

async function login(
  params: Pick<UserParams, "email" | "password">
): Promise<Auth> {
  const auth = await userApi.login(params);

  return userAdapter.toAuthResponse(auth);
}

async function register(params: UserParams): Promise<Auth> {
  const auth = await userApi.register(params);

  return userAdapter.toAuthResponse(auth);
}

async function logout(): Promise<number> {
  const status = await userApi.logout();
  return status;
}

export const userService = {
  login,
  register,
  logout,
};
