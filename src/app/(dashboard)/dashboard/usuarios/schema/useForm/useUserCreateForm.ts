import { UseFormReturn } from "react-hook-form";
import { UserCreateSchema, userCreateSchema } from "..";
import { useForm } from "@hooks";

export type ReturnUserCreateFormType = UseFormReturn<UserCreateSchema>;

export function useUserCreateForm(): ReturnUserCreateFormType {
  return useForm<UserCreateSchema>(userCreateSchema);
}
