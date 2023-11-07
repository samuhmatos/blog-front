import { z } from "zod";
export const userCreateSchema = z
  .object({
    name: z.string().min(5, "Nome muito curto").max(100, "Nome muito longo"),
    email: z.string().email().max(255, "Email muito longo"),
    password: z.string().min(8, "Senha muito curto"),
    confirmPassword: z.string(),
    isAdmin: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type UserCreateSchema = z.infer<typeof userCreateSchema>;
