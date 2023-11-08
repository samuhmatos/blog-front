"use client";
import { useMutation } from "@infra";
import { ReactionType } from "@types";
import { PostReaction, ReactionDispatchType, postReactionService } from "..";
import { errorUtils } from "@utils";

export function useCreatePostReaction(setReaction: ReactionDispatchType) {
  return useMutation<{ postId: number; type: ReactionType }, PostReaction>(
    postReactionService.addReaction,
    {
      onError(error) {
        errorUtils.setGlobalErrorMessage(error, {
          "401": "Para poder reagir, é necessário estar logado!",
        });
        setReaction(null);
      },
      onSuccess(data) {
        setReaction(data.type);
      },
    }
  );
}
