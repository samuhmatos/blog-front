import { z } from "zod";
export const MAX_FILE_SIZE = 500000;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export interface PostSchemaProps {
  categories: string[];
}
export function basePostSchema({ categories }: PostSchemaProps) {
  const schema = z.object({
    title: z
      .string()
      .min(20, "Título muito curto")
      .max(120, "Título muito longo"),
    subTitle: z
      .string()
      .min(20, "Sub título muito curto")
      .max(200, "Sub título muito longo"),
    content: z.string().min(100, "Conteúdo muito curto"),
    category: z.string().refine(
      (value: any) => {
        return categories.includes(value);
      },
      {
        message: "Por favor, selecione uma categoria válida.",
      }
    ),
  });

  return schema;
}

export type BasePostSchema = z.infer<ReturnType<typeof basePostSchema>>;
