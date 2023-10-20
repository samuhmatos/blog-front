"use client";
import { useEffect, useState } from "react";
import { PostCommentReaction, postCommentReactionService } from "..";
import { errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { ReactionType } from "@types";

interface Props {
  like: number;
  unLike: number;
}

export function usePostCommentReaction({ like, unLike }: Props) {
  const [loading, setLoading] = useState<boolean>();
  const [reactionType, setReactionType] = useState<ReactionType | null>(null);
  const [likeCount, setLikeCount] = useState<number>(like);
  const [unLikeCount, setUnlikeCount] = useState<number>(unLike);

  async function createReaction(
    params: Pick<PostCommentReaction, "commentId" | "type">
  ) {
    setLoading(true);
    postCommentReactionService
      .create(params)
      .then((res) => {
        setReactionType(res.reaction.type);

        setLikeCount(res.count.like);
        setUnlikeCount(res.count.unlike);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function deleteReaction(postId: number) {
    setLoading(true);

    postCommentReactionService
      .destroy(postId)
      .then((res) => {
        if (reactionType === "LIKE") {
          setLikeCount((prev) => prev - 1);
        } else if (reactionType === "UNLIKE") {
          setUnlikeCount((prev) => prev - 1);
        }

        setReactionType(null);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function show(commentId: number) {
    setLoading(true);
    postCommentReactionService
      .show(commentId)
      .then((res) => {
        setReactionType(res.type);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    reactionType,
    createReaction,
    deleteReaction,
    likeCount,
    unLikeCount,
    show,
  };
}

// TODO: error handler post comment reaction
