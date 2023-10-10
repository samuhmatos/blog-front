import { z } from "zod";
export const userProfileSchema = z.object({
  name: z
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
  username: z
    .string()
    .min(5, "Username muito curto")
    .max(255, "Username muito longo"),
  email: z.string().email("Email inválido"),
  description: z.string().max(255),
});

export type UserProfileSchema = z.infer<typeof userProfileSchema>;
