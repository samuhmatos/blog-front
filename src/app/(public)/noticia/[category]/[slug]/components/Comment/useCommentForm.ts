"use client";
import { useForm } from "@hooks";
import { CommentSchema, commentSchema } from "./commentSchema";

export function useCommentForm() {
  return useForm<CommentSchema>(commentSchema, {
    defaultValues: {
      message: "",
    },
    mode: "onSubmit",
  });
}
