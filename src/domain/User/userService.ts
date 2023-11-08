import {  User,
  UserAuthParams,
  UserPagePaginationParam,
  UserPagination,
  UserParams,
  UserUpdateParams,
} from ".";
import { Auth, Page, PagePaginationParams, apiAdapter } from "@api";
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

async function update({
  userId,
  params,
}: UserUpdateParams): Promise<Partial<Auth>> {
  const userUpdated = await userApi.update(userId, params);

  return userAdapter.toAuthResponse(userUpdated);
}

async function CSRF_token(): Promise<void> {
  return userApi.CSRF_token();
}

async function getList(
  params: UserPagePaginationParam
): Promise<Page<UserPagination>> {
  const userAPI = await userApi.getList(params);

  return {
    meta: apiAdapter.toMetaDataPage(userAPI.meta),
    data: userAPI.data.map(userAdapter.toUserPagination),
  };
}

async function remove(userId: number): Promise<void> {
  return await userApi.remove(userId);
}

async function show(userId: number): Promise<User> {
  const userAPI = await userApi.show(userId);
  return userAdapter.toUser(userAPI);
}

async function restore(userId: number): Promise<void> {
  return await userApi.restore(userId);
}

async function create(
  params: UserAuthParams & { is_admin: boolean }
): Promise<User> {
  const userAPI = await userApi.create(params);

  return userAdapter.toUser(userAPI);
}

export const userService = {
  login,
  register,
  logout,
  update,
  CSRF_token,
  getList,
  remove,
  show,
  restore,
  create,
};
