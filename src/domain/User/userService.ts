import { User, UserAuthParams, UserParams } from ".";
import { Auth } from "@api";
import { userApi } from "./userApi";
import { userAdapter } from "./userAdapter";

async function login(
  params: Pick<UserAuthParams, "email" | "password">
): Promise<Auth> {
  const auth = await userApi.login(params);

  return userAdapter.toAuthResponse(auth);
}

async function register(params: UserAuthParams): Promise<Auth> {
  const auth = await userApi.register(params);

  return userAdapter.toAuthResponse(auth);
}

async function logout(): Promise<number> {
  const status = await userApi.logout();
  return status;
}

async function update(
  userId: number,
  params: FormData
): Promise<Partial<Auth>> {
  const userUpdated = await userApi.update(userId, params);

  return userAdapter.toAuthResponse(userUpdated);
}

async function CSRF_token(): Promise<void> {
  return userApi.CSRF_token();
}

export const userService = {
  login,
  register,
  logout,
  update,
  CSRF_token,
};
