"use client";import { useForm } from "@hooks";
import { CreatePostSchema, createPostSchema } from "../createPostSchema";

export function useCreatePostForm(categories: string[]) {
  return useForm<CreatePostSchema>(createPostSchema({ categories }));
}

export type ReturnCreatePostFormType = ReturnType<typeof useCreatePostForm>;
