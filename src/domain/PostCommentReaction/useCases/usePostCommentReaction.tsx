"use client";
import { useState } from "react";
import {
  PostCommentReaction,
  postCommentReactionService,
  PostCommentReactionType,
} from "..";
import { errorUtils } from "@utils";

interface Props {
  like: number;
  unLike: number;
}

export function usePostCommentReaction({ like, unLike }: Props) {
  const [loading, setLoading] = useState<boolean>();
  const [reaction, setReaction] = useState<PostCommentReactionType | null>(
    null
  );
  const [likeCount, setLikeCount] = useState<number>(like);
  const [unLikeCount, setUnlikeCount] = useState<number>(unLike);

  async function createReaction(params: PostCommentReaction) {
    setLoading(true);
    postCommentReactionService
      .create(params)
      .then((res) => {
        setReaction(res.type);

        if (reaction !== res.type && res.type === "LIKE") {
          setLikeCount((prev) => prev + 1);
        } else if (reaction !== res.type && res.type === "UNLIKE") {
          setUnlikeCount((prev) => prev + 1);
        }
        return res.type;
      })
      .catch((err) => {
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
        if (reaction === "LIKE") {
          setLikeCount((prev) => prev - 1);
        } else if (reaction === "UNLIKE") {
          setUnlikeCount((prev) => prev - 1);
        }

        setReaction(null);
      })
      .catch((err) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    reaction,
    createReaction,
    deleteReaction,
    likeCount,
    unLikeCount,
  };
}
