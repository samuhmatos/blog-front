import { z } from "zod";
export const passwordResetSchema = z
  .object({
    password: z.string().min(8, "Senha muito curto"),
    confirmPassword: z.string(),
    token: z.string(),
    email: z.string().email("Não é um email"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type PasswordResetSchema = z.infer<typeof passwordResetSchema>;
