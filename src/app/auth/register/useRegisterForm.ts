"use client";import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn } from "react-hook-form";
import { registerSchema, RegisterSchema } from "./registerSchema";
import { useForm } from "@hooks";

export type ReturnRegisterFormType = UseFormReturn<RegisterSchema>;

export function useRegisterForm(): ReturnRegisterFormType {
  return useForm<RegisterSchema>(registerSchema, {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
}
