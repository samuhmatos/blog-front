"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "./forgotPasswordSchema";

type ReturnRegisterFormType = UseFormReturn<ForgotPasswordSchema>;

export function useForgotPasswordForm(): ReturnRegisterFormType {
  const formValidation = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  return formValidation;
}
