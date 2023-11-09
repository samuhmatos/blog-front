"use client";
import { EditPostCommentProps, PostComment, PostCommentParams } from "@domain";
import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useCommentProvider } from "./useCommentProvider";

export interface CommentState {
  replyTo: number | null;
  action: "update" | "create";
  comment: PostComment | null;
  comments: PostComment[];
}

export interface CommentService extends CommentState {
  setCommentState: Dispatch<SetStateAction<CommentState>>;
  loading: boolean;
  createComment: (params: PostCommentParams, callbackFn: () => void) => void;
  updateComment: (params: PostCommentParams, callbackFn: () => void) => void;
  removeComment: (params: Omit<EditPostCommentProps, "comment">) => void;
}

export const CommentContext = createContext<CommentService>({
  comment: null,
  loading: false,
  replyTo: null,
  comments: [],
  action: "create",
  setCommentState: () => {},
  createComment: () => {},
  removeComment: () => {},
  updateComment: () => {},
});

export function CommentProvider({ children }: { children: ReactNode }) {
  return (
    <CommentContext.Provider value={useCommentProvider()}>
      {children}
    </CommentContext.Provider>
  );
}
