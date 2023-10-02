"use client";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useState, useEffect } from "react";
import { PostCommentReactionType, usePostCommentReaction } from "@domain";

interface Props {
  commentId: number;
  postId: number;
  like: number;
  unLike: number;
}
export function CommentReaction({ commentId, like, postId, unLike }: Props) {
  const {
    createReaction,
    loading,
    reaction,
    likeCount,
    unLikeCount,
    deleteReaction,
  } = usePostCommentReaction({
    like,
    unLike,
  });

  const diff = likeCount - unLikeCount;

  async function handleReaction(e: PostCommentReactionType) {
    if (e !== reaction) {
      createReaction({
        commentId,
        type: e,
      });
    } else {
      deleteReaction(commentId);
    }
  }

  return (
    <div className="px-3 py-2 bg-primary-900 flex flex-col gap-2 rounded">
      <button
        className={`${
          reaction === "LIKE" ? "text-white" : "text-gray-500"
        } text-base`}
        onClick={() => handleReaction("LIKE")}
      >
        <BiPlus />
      </button>

      <span className="text-base font-bod text-gray-200 text-center">
        {diff}
      </span>

      <button
        className={`${
          reaction === "UNLIKE" ? "text-white" : "text-gray-500"
        } text-base `}
        onClick={() => handleReaction("UNLIKE")}
      >
        <BiMinus />
      </button>
    </div>
  );
}