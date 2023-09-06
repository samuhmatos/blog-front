"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
} from "react";
import { PostComment } from "@domain";

interface CommentStateContext {
  replyTo: number | null;
  action: "edit" | "create";
  comment: PostComment | null;
  comments: PostComment[];
}

interface CommentState extends CommentStateContext {
  setCommentState: Dispatch<SetStateAction<CommentStateContext>>;
}

export const CommentContext = createContext<CommentState>({
  comment: null,
  action: "create",
  replyTo: null,
  comments: [],
  setCommentState: () => {},
});

export function CommentProvider({ children }: { children: ReactNode }) {
  const [commentState, setCommentState] = useState<CommentStateContext>({
    comment: null,
    replyTo: null,
    action: "create",
    comments: [],
  });

  return (
    <CommentContext.Provider
      value={{
        ...commentState,
        setCommentState,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}
