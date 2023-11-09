"use client";
import { UseFormReturn } from "react-hook-form";
import { LoginSchema, loginSchema } from "./loginSchema";
import { useForm } from "@hooks";

export type ReturnLoginFormType = UseFormReturn<LoginSchema>;

export function useLoginForm(): ReturnLoginFormType {
  return useForm<LoginSchema>(loginSchema);
}
