"use client";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

import { postCategoryService } from "..";

export function usePostCategoryGet(categoryId: number) {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QueryKeys.PostCategoryGet, categoryId],
    queryFn: () => postCategoryService.show(categoryId),
    staleTime: 50000, // 5 minutes
  });

  return {
    isLoading,
    category: data,
    refetch,
  };
}
