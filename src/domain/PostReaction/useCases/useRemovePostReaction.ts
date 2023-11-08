"use client";
import { ReactionDispatchType, postReactionService } from "..";
import { useMutation } from "@infra";
import { errorUtils } from "@utils";

export function useRemovePostReaction(setReaction: ReactionDispatchType) {
  return useMutation<number, void>(postReactionService.deleteReaction, {
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
    onSuccess(data) {
      setReaction(null)
    },
  });
}
