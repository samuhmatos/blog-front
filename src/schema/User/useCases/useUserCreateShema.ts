import { UseFormReturn, useForm } from "react-hook-form";import { zodResolver } from "@hookform/resolvers/zod";
import { UserCreateSchema, userCreateSchema } from "../userCreateSchema";

export type ReturnUserCreateSchemaType = UseFormReturn<UserCreateSchema>;

export function useUserCreateSchema(): ReturnUserCreateSchemaType {
  const schema = useForm<UserCreateSchema>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      isAdmin: false,
    },
    mode: "onChange",
  });

  return schema;
}
