import { UserChangePasswordSchema, userChangePasswordSchema } from "..";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type ReturnUserChangePasswordSchemaType =
  UseFormReturn<UserChangePasswordSchema>;

export function useUserChangePasswordSchema(): ReturnUserChangePasswordSchemaType {
  const schema = useForm<UserChangePasswordSchema>({
    resolver: zodResolver(userChangePasswordSchema),
    mode: "onChange",
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });

  return schema;
}
