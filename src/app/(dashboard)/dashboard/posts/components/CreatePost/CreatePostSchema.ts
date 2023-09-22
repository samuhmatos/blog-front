import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export function createPostSchema(categories: string[]) {
  return z.object({
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
    image: z
      .any()
      .refine((file: File) => {
        return file?.size <= MAX_FILE_SIZE, `Tamanho máximo da imagem é 5MB.`;
      })
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Apenas os formatos .jpg, .jpeg, .png and .webp são suportados"
      ),
  });
}

export type CreatePostSchema = {
  title: string;
  subTitle: string;
  content: string;
  category: string;
  image: File;
};
