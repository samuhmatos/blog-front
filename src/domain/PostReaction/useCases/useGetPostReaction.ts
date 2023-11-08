"use client";
import { PostReaction, postReactionService } from "..";
import { useMutation } from "@infra";
import { Dispatch } from "react";
import { ReactionType } from "@types";

export type ReactionDispatchType = Dispatch<ReactionType | null>;
export function useGetPostReaction(setReaction: ReactionDispatchType) {
  return useMutation<number, PostReaction>(postReactionService.getReaction, {
    onSuccess(data) {
      setReaction(data.type);
    },
    onError(error) {
      setReaction(null);
    },
  });
}
