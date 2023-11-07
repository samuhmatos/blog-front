import { z } from "zod";
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contactSchema = z.object({
  fullName: z.string().min(5, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().email("Email inválido"),
  phone: z.string().regex(phoneRegex, "Numero inválido"),
  subject: z
    .string()
    .min(5, "Assunto muito curto")
    .max(100, "Assunto muito longo"),
  message: z
    .string()
    .min(5, "Mensagem muito curta")
    .max(255, "Mensagem muito longa"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
