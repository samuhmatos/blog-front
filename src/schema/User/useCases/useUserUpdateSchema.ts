import { UseFormReturn, useForm } from "react-hook-form";import { zodResolver } from "@hookform/resolvers/zod";
import { UserUpdateSchema, userUpdateSchema } from "..";

export type ReturnUserUpdateSchemaType = UseFormReturn<UserUpdateSchema>;

export function useUserUpdateSchema(): ReturnUserUpdateSchemaType {
  const schema = useForm<UserUpdateSchema>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      email: "",
      name: "",
      isAdmin: false,
      description: "",
      username: "",
    },
    mode: "onChange",
  });

  return schema;
}
