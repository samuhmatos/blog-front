"use client";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

import { postService } from "..";

export function useGetPost(idOrSlug: string) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.GetPost, idOrSlug],
    queryFn: () => postService.getOne(idOrSlug),
    staleTime: 1000 * 90, // 90 seconds
  });

  return {
    post: data,
    isLoading,
    isError,
    refetch,
  };
}
