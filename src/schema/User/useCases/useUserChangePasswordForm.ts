import { UserChangePasswordSchema, userChangePasswordSchema } from "..";
import { UseFormReturn } from "react-hook-form";
import { useForm } from "@hooks";

export type ReturnUserChangePasswordSchemaType =
  UseFormReturn<UserChangePasswordSchema>;

export function useUserChangePasswordForm(): ReturnUserChangePasswordSchemaType {
  return useForm<UserChangePasswordSchema>(userChangePasswordSchema);
}
