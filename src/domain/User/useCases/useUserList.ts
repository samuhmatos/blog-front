"use client";
import { QueryKeys, usePaginatedList } from "@infra";
import { UserPagePaginationParam, UserPagination, userService } from "..";

export function useUserList(params: UserPagePaginationParam) {
  function serviceList() {
    return userService.getList(params);
  }

  return usePaginatedList<UserPagination>(
    [QueryKeys.UserList, params.page, params.per_page, params.is_trash],
    serviceList
  );
}
