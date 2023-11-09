"use client";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "./forgotPasswordSchema";
import { useForm } from "@hooks";

export function useForgotPasswordForm() {
  return useForm<ForgotPasswordSchema>(forgotPasswordSchema, {
    defaultValues: {
      email: "",
    },
  });
}
