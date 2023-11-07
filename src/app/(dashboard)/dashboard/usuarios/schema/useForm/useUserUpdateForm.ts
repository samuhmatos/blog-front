import { UseFormReturn } from "react-hook-form";
import { UserUpdateSchema, userUpdateSchema } from "..";
import { useForm } from "@hooks";

export type ReturnUserUpdateFormType = UseFormReturn<UserUpdateSchema>;

export function useUserUpdateForm(): ReturnUserUpdateFormType {
  return useForm<UserUpdateSchema>(userUpdateSchema);
}
