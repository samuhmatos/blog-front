import {
  UserApi,
  UserAuthParams,
  UserPagePaginationParam,
  UserPaginationApi,
} from ".";
import { AuthAPI, PageAPI, api } from "@api";

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

async function getList(
  params: UserPagePaginationParam
): Promise<PageAPI<UserPaginationApi>> {
  const response = await api.get<PageAPI<UserPaginationApi>>(`user/paginate`, {
    params: {
      ...params,
    },
  });

  return response.data;
}

async function remove(user_id: number): Promise<void> {
  await api.delete(`user/${user_id}`);
  return;
}

async function show(user_id: number): Promise<UserApi> {
  const response = await api.get(`user/filter/${user_id}`);

  return response.data;
}

async function restore(user_id: number): Promise<void> {
  const response = await api.post(`user/${user_id}/restore`);
  return;
}

async function create(
  params: UserAuthParams & { is_admin: boolean }
): Promise<UserApi> {
  const response = await api.post<UserApi>("user", {
    ...params,
  });

  return response.data;
}

export const userApi = {
  register,
  logout,
  update,
  getList,
  remove,
  show,
  restore,
  create,
};
