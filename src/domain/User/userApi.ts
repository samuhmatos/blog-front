import {  UserApi,
  UserAuthParams,
  UserPagePaginationParam,
  UserPaginationApi,
} from ".";
import { AuthAPI, PageAPI, api } from "@api";

const PATH = `user`;

async function register(params: UserAuthParams): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>("auth/register", {
    ...params,
  });

  return response.data;
}

async function logout(): Promise<number> {
  const response = await api.delete("auth/logout");
  return response.status;
}

async function update(user_id: number, params: FormData): Promise<AuthAPI> {
  const response = await api.post<AuthAPI>(`${PATH}/${user_id}`, params, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}

async function getList(
  params: UserPagePaginationParam
): Promise<PageAPI<UserPaginationApi>> {
  const response = await api.get<PageAPI<UserPaginationApi>>(
    `${PATH}/paginate`,
    {
      params: {
        ...params,
      },
    }
  );

  return response.data;
}

async function remove(user_id: number): Promise<void> {
  await api.delete(`${PATH}/${user_id}`);
  return;
}

async function show(user_id: number): Promise<UserApi> {
  const response = await api.get(`${PATH}/filter/${user_id}`);

  return response.data;
}

async function restore(user_id: number): Promise<void> {
  const response = await api.post(`${PATH}/${user_id}/restore`);
  return;
}

async function create(
  params: UserAuthParams & { is_admin: boolean }
): Promise<UserApi> {
  const response = await api.post<UserApi>(PATH, {
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
