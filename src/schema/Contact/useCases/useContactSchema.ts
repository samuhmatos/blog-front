import { UseFormReturn, useForm } from "react-hook-form";
import { ContactSchema, contactSchema } from "..";
import { zodResolver } from "@hookform/resolvers/zod";

export function useContactSchema(): UseFormReturn<ContactSchema> {
  const schema = useForm<ContactSchema>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
  });

  return schema;
}
