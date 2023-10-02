"use client";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  CreatePostSchema,
  createPostSchema,
} from "../components/Post/PostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, usePostCategory } from "@domain";

export type ReturnPostSchemaType = UseFormReturn<CreatePostSchema> & {
  categories: Category[] | null;
};

interface Props {
  editMode?: boolean;
}
export function usePostSchema({
  editMode = false,
}: Props): ReturnPostSchemaType {
  const { categories: data } = usePostCategory();
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
