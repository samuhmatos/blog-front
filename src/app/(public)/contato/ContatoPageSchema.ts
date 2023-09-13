import { z } from "zod";const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const contatoSchema = z.object({
  fullName: z
    .string()
    .min(5, "Nome muito curto")
    .max(100, "Nome muito longo")
    .transform((value) => {
      return value
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    }),
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

export type ContatoSchema = z.infer<typeof contatoSchema>;
