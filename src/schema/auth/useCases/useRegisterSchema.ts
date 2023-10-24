"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { RegisterSchema } from "..";
import { registerSchema } from "../registerSchema";

export type ReturnRegisterSchema = UseFormReturn<RegisterSchema>;

export function useRegisterSchema(): ReturnRegisterSchema {
  const schema = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
    mode: "onChange",
  });

  return schema;
}
