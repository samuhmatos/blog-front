import { UseFormReturn, useForm } from "react-hook-form";import { zodResolver } from "@hookform/resolvers/zod";
import { PostCategorySchema, postCategorySchema } from "../PostCategorySchema";

export type ReturnPostCategorySchemaType = UseFormReturn<PostCategorySchema>;

export function usePostCategorySchema(): ReturnPostCategorySchemaType {
  const schema = useForm<PostCategorySchema>({
    resolver: zodResolver(postCategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
    mode: "onChange",
  });

  return { ...schema };
}
