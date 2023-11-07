import { UseFormReturn } from "react-hook-form";
import { ContactSchema, contactSchema } from "./ContactSchema";
import { useForm } from "@hooks";

export function useContactForm(): UseFormReturn<ContactSchema> {
  return useForm<ContactSchema>(contactSchema);
}
