import { z } from "zod";
export const commentSchema = z.object({
  message: z
    .string()
    .min(2, "Mensagem muito curta")
    .max(255, "Mensagem muito longa"),
});

export type CommentSchema = z.infer<typeof commentSchema>;
