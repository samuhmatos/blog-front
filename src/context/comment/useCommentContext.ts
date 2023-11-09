"use client";
import { useContext } from "react";
import { CommentContext } from "./providers/commentProviders";

export function useCommentContext() {
  return useContext(CommentContext);
}
