import { z } from "zod";
export const userSchema = (create?: boolean) => {
  var baseSchema = z.object({
    name: z.string().min(5, "Nome muito curto").max(100, "Nome muito longo"),
    username: z.string().max(255, "Usuário é muito longo"),
    email: z.string().email().max(255, "Email muito longo"),
    description: z.string().max(255, "Descrição muito longa").optional(),
  });

  var schema = create
    ? baseSchema
        .extend({
          password: z.string().min(8, "Senha muito curto"),
          confirmPassword: z.string(),
          isAdmin: z.boolean(),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: "As senhas não são iguais",
          path: ["confirmPassword"],
        })
    : baseSchema;

  return schema;
};

export interface UserSchema {
  name: string;
  username: string;
  email: string;
  description?: string;
  password: string;
  confirmPassword: string;
  isAdmin: boolean;
}
