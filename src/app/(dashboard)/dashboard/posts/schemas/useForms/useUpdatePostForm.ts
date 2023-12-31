"use client";
import { UpdatePostSchema, updatePostSchema } from "../updatePostSchema";
import { useForm } from "@hooks";

export function useUpdatePostForm(categories: string[]) {
  return useForm<UpdatePostSchema>(updatePostSchema({ categories }), {
    defaultValues: {
      isDraft: false,
    },
  });
}

export type ReturnUpdatePostFormType = ReturnType<typeof useUpdatePostForm>;
