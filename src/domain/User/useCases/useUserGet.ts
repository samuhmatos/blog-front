"use client";
import { userService } from "..";
import { errorUtils } from "@utils";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

export function useUserGet(userId: number) {
  const { data, isLoading, isError, refetch, error } = useQuery({
    queryKey: [QueryKeys.UserGetById, userId],
    queryFn: () => userService.show(userId),
    staleTime: 60000, // 60 seconds
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
  };
}
