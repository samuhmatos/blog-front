"use client";import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

import { PostComment } from "@domain";

export interface CommentState {
  replyTo: number | null;
  action: "update" | "create";
  comment: PostComment | null;
  comments: PostComment[];
}

export interface CommentService extends CommentState {
  setCommentState: Dispatch<SetStateAction<CommentState>>;
  setContext: (
    newCommentList: PostComment[],
    actualComment: PostComment | null,
    reset?: boolean
  ) => void;
  scrollToForm: () => void;
}

export const CommentContext = createContext<CommentService>({
  comment: null,
  replyTo: null,
  comments: [],
  action: "create",
  setCommentState: () => {},
  setContext: () => {},
  scrollToForm: () => {},
});

export function CommentProvider({ children }: { children: ReactNode }) {
  const [commentState, setCommentState] = useState<CommentState>({
    comment: null,
    comments: [],
    replyTo: null,
    action: "create",
  });

  function setContext(
    newComments: PostComment[],
    actualComment: PostComment | null,
    reset?: boolean
  ): void {
    setCommentState((prev) => ({
      ...prev,
      replyTo: reset ? null : prev.replyTo,
      comments: newComments,
      comment: actualComment,
      action: reset ? "create" : prev.action,
    }));
  }

  function scrollToForm() {
    var textArea = document.querySelector(
      "#commentSection textarea"
    ) as HTMLTextAreaElement;
    var offSetTop = textArea!.offsetTop;

    window.scrollTo({ top: offSetTop - 200 });
    textArea!.focus();
  }

  return (
    <CommentContext.Provider
      value={{
        ...commentState,
        setCommentState,
        setContext,
        scrollToForm,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
