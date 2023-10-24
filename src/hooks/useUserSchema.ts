import { UseFormReturn, useForm } from "react-hook-form";import { UserSchema, userSchema } from "@schema";
import { zodResolver } from "@hookform/resolvers/zod";

export type ReturnUserSchemaType = UseFormReturn<UserSchema>;

export function useUserSchema(create?: boolean): ReturnUserSchemaType {
  const schema = useForm<UserSchema>({
    resolver: zodResolver(userSchema(create)),
    defaultValues: {
      description: "",
      email: "",
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      isAdmin: false,
    },
    mode: "onChange",
  });

  return schema;
}
