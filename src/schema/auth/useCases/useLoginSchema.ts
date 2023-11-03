"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "../loginSchema";
import { UseFormReturn, useForm } from "react-hook-form";

export type ReturnLoginSchemaType = UseFormReturn<LoginSchema>;

export function useLoginSchema(): ReturnLoginSchemaType {
  const schema = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  return schema;
}
// renomear as variaveis 'schemas'
// ex.: useLoginForm
// mover hooks para camada de pagina
