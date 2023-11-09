"use client";
import { UseFormReturn } from "react-hook-form";
import { registerSchema, RegisterSchema } from "./registerSchema";
import { useForm } from "@hooks";

export type ReturnRegisterFormType = UseFormReturn<RegisterSchema>;

export function useRegisterForm(): ReturnRegisterFormType {
  return useForm<RegisterSchema>(registerSchema, {
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  });
}
