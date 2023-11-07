"use client";
import { UseFormReturn } from "react-hook-form";
import { PasswordResetSchema } from "./passwordResetSchema";
import { passwordResetSchema } from "./passwordResetSchema";
import { useForm } from "@hooks";

type ReturnPasswordResetFormType = UseFormReturn<PasswordResetSchema>;

export function usePasswordResetForm(): ReturnPasswordResetFormType {
  return useForm<PasswordResetSchema>(passwordResetSchema);
}
