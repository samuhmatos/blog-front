"use client";
import { UseFormReturn, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Category, usePostCategoryGet } from "@domain";
import { useEffect } from "react";
import { CreatePostSchema, createPostSchema } from "./../PostSchema";

export type ReturnPostSchemaType = UseFormReturn<CreatePostSchema> & {
  categories: Category[] | null;
};

interface Props {
  editMode?: boolean;
}
export function usePostSchema({
  editMode = false,
}: Props): ReturnPostSchemaType {
  const { categories: data, getAll } = usePostCategoryGet();

  useEffect(() => {
    getAll();
  }, []);

  const categories = data?.map((value) => value.id.toString()) || [];

  const schema = useForm<CreatePostSchema>({
    resolver: zodResolver(
      createPostSchema({
        categories,
        editMode,
      })
    ),
    defaultValues: {
      title: "",
      subTitle: "",
      content: "",
      category: "",
    },
    mode: "onChange",
  });

  return { ...schema, categories: data };
}
