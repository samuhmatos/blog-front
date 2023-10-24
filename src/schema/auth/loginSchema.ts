import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Não é um email válido")
    .max(255, "Email muito longo"),
  password: z.string().min(5, "Senha muito curta"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
