"use client";
import { Dispatch, SetStateAction } from "react";

import { useMutation } from "@infra";
import { ReactionType } from "@types";
import { errorUtils } from "@utils";

import {
  PostCommentReaction,
  PostCommentReactionWithCount,
  postCommentReactionService,
} from "..";

interface Props {
  setReaction: Dispatch<SetStateAction<ReactionType | null>>;
  setReactionCount: Dispatch<SetStateAction<number>>;
}
export function usePostCommentReactionCreate({
  setReaction,
  setReactionCount,
}: Props) {
  return useMutation<
    Pick<PostCommentReaction, "commentId" | "type">,
    PostCommentReactionWithCount
  >(postCommentReactionService.create, {
    onSuccess(data) {
      const like = data.count.like;
      const unLike = data.count.unlike;
      const count = like - unLike;

      setReactionCount(count);
      setReaction(data.reaction.type);
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
