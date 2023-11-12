"use client";
import { useCommentContext } from "./useCommentContext";

export function useComment() {
  return useCommentContext();
}

// export function useCommentService() {
//   const { createComment, updateComment, removeComment, setCommentState } =
//     useCommentContext();

//   return {
//     createComment,
//     updateComment,
//     removeComment,
//     setCommentState,
//   };
// }
