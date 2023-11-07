import { z } from "zod";
export const postCategorySchema = z.object({
  name: z.string().min(3, "Nome muito curto").max(50, "Nome muito longo"),
  description: z.string().max(255, "Nome muito longo"),
});

export type PostCategorySchema = z.infer<typeof postCategorySchema>;
