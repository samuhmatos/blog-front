"use client";import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn } from "react-hook-form";
import { LoginSchema, loginSchema } from "./loginSchema";
import { useForm } from "@hooks";

export type ReturnLoginFormType = UseFormReturn<LoginSchema>;

export function useLoginForm(): ReturnLoginFormType {
  return useForm<LoginSchema>(loginSchema);
}

// renomear as variaveis 'schemas'
// ex.: useLoginForm
// mover hooks para camada de pagina
