"use client";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";
import { authService } from "..";

export function useGetCurrentUser() {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QueryKeys.GetCurrentUser],
    queryFn: () => authService.currentUser(),
    staleTime: 3600000, // 1 hour,
  });

  return {
    isLoading,
    data,
    refetch,
  };
}
