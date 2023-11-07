import { z } from "zod";
export const registerSchema = z
  .object({
    firstName: z.string().max(50, "Nome muito longo"),
    lastName: z.string().max(50, "Sobrenome muito longo"),
    email: z
      .string()
      .email("Não é um email válido")
      .max(255, "Email muito longo"),
    password: z.string().min(1, "Senha muito curta"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não são iguais",
    path: ["confirmPassword"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
