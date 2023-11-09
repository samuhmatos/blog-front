"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UseFormReturn,
  useForm as RHFUseForm,
  FieldValues,
  UseFormProps,
} from "react-hook-form";

export function useForm<SchemaType extends FieldValues = FieldValues>(
  schemaResolver: any,
  config?: UseFormProps<SchemaType>
): UseFormReturn<SchemaType> {
  return RHFUseForm<SchemaType>({
    resolver: zodResolver(schemaResolver),
    mode: "onChange",
    ...config,
  });
}
