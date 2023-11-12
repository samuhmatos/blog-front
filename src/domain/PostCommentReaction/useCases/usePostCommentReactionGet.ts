"use client";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

import { postCommentReactionService } from "..";

export function usePostCommentReactionGet(reactionId: number) {
  const { isLoading, data, refetch } = useQuery({
    queryKey: [QueryKeys.PostCommentReactionGet, reactionId],
    queryFn: () => postCommentReactionService.show(reactionId),
    staleTime: 1500000, // 25 minutes
  });

  return {
    isLoading,
    reaction: data,
    refetch,
  };
}
