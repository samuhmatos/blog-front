import { UseFormReturn } from "react-hook-form";
import { PostCategorySchema, postCategorySchema } from "./PostCategorySchema";
import { useForm } from "@hooks";

export type ReturnPostCategoryFormType = UseFormReturn<PostCategorySchema>;

export function usePostCategoryForm(): ReturnPostCategoryFormType {
  return useForm<PostCategorySchema>(postCategorySchema, {
    description: "",
    name: "",
  });
}
