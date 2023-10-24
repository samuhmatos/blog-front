"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from "../forgotPasswordSchema";

type ReturnRegisterSchema = UseFormReturn<ForgotPasswordSchema>;

export function useForgotPasswordSchema(): ReturnRegisterSchema {
  const schema = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  return schema;
}
