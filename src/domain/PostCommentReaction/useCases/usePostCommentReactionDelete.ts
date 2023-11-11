"use client";
import { Dispatch, SetStateAction } from "react";

import { useMutation } from "@infra";
import { ReactionType } from "@types";
import { errorUtils } from "@utils";

import { postCommentReactionService } from "..";

interface Props {
  reaction: ReactionType | null;
  setReaction: Dispatch<SetStateAction<ReactionType | null>>;
  setReactionCount: Dispatch<SetStateAction<number>>;
}
export function usePostCommentReactionDelete({
  setReaction,
  setReactionCount,
  reaction,
}: Props) {
  return useMutation<number, void>(postCommentReactionService.destroy, {
    onSuccess() {
      if (reaction === "LIKE") {
        setReactionCount((prev) => prev - 1);
      } else {
        setReactionCount((prev) => prev + 1);
      }

      setReaction(null);
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
