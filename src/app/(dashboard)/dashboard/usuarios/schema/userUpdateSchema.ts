import { z } from "zod";export const userUpdateSchema = z.object({
  name: z.string().min(5, "Nome muito curto").max(100, "Nome muito longo"),
  username: z.string().max(255, "Usuário é muito longo"),
  email: z.string().email().max(255, "Email muito longo"),
  description: z.string().max(255, "Descrição muito longa").optional(),
  isAdmin: z.boolean(),
});

export type UserUpdateSchema = z.infer<typeof userUpdateSchema>;
