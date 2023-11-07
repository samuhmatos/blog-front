import { z } from "zod";export const newsletterSchema = z.object({
  email: z
    .string()
    .email("Não é um email válido")
    .max(255, "Email muito longo"),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;
