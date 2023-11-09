"use client";
import { useCommentContext } from "./useCommentContext";

export function useComment() {
  const { comment, comments, loading, replyTo, action } = useCommentContext();
  return {
    comment,
    comments,
    loading,
    replyTo,
    action,
  };
}

export function useCommentService() {
  const { createComment, updateComment, removeComment, setCommentState } =
    useCommentContext();

  return {
    createComment,
    updateComment,
    removeComment,
    setCommentState,
  };
}
