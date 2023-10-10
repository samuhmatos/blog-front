import { z } from "zod";export const userChangePasswordSchema = z
  .object({
    password: z.string().min(8, "Senha muito curto"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type UserChangePasswordSchema = z.infer<typeof userChangePasswordSchema>;
