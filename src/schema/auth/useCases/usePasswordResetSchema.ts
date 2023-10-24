"use client";import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { PasswordResetSchema } from "..";
import { passwordResetSchema } from "../passwordResetSchema";

type ReturnPasswordResetSchema = UseFormReturn<PasswordResetSchema>;

export function usePasswordResetSchema(): ReturnPasswordResetSchema {
  const schema = useForm<PasswordResetSchema>({
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      email: "",
      token: "",
    },
    mode: "onChange",
  });

  return schema;
}
