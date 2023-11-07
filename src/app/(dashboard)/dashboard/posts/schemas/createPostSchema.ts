import { z } from "zod";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
  PostSchemaProps,
  basePostSchema,
} from "./BasePostSchema";

export function createPostSchema({ categories }: PostSchemaProps) {
  const schema = basePostSchema({ categories }).extend({
    image: z
      .instanceof(File)
      .refine((file) => {
        return file.size <= MAX_FILE_SIZE, `Tamanho máximo da imagem é 5MB.`;
      })
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Apenas os formatos .jpg, .jpeg, .png and .webp são suportados"
      ),
  });

  return schema;
}

export type CreatePostSchema = z.infer<ReturnType<typeof createPostSchema>>;
