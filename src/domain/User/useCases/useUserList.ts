"use client";
import { usePaginatedList } from "../../hooks/usePaginatedList";
import { UserPagePaginationParam, UserPagination, userService } from "..";

export function useUserList(params: UserPagePaginationParam) {
  return usePaginatedList<UserPagination, UserPagePaginationParam>(
    userService.getList,
    params
  );
}
