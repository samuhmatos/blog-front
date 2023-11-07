"use client";import { zodResolver } from "@hookform/resolvers/zod";
import {
  UseFormReturn,
  useForm as RHFUseForm,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

export function useForm<SchemaType extends FieldValues = FieldValues>(
  schemaResolver: any,
  defaultValues?: DefaultValues<SchemaType>
): UseFormReturn<SchemaType> {
  const formValidation = RHFUseForm<SchemaType>({
    resolver: zodResolver(schemaResolver),
    defaultValues,
    mode: "onChange",
  });

  return formValidation as UseFormReturn<SchemaType>;
}
