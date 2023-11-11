"use client";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

import { postCategoryService } from "..";

export function usePostCategoryGetAll() {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QueryKeys.PostCategoryGetAll],
    queryFn: () => postCategoryService.getAll(),
    staleTime: 50000, // 5 minutes
  });

  return {
    isLoading,
    categories: data,
    refetch,
  };
}
