"use client";
import { UseFormReturn } from "react-hook-form";
import { NewsletterSchema, newsletterSchema } from "./newsletterSchema";
import { useForm } from "@hooks";

export type ReturnNewsletterFormType = UseFormReturn<NewsletterSchema>;

export function useNewsletterForm() {
  return useForm<NewsletterSchema>(newsletterSchema, {
    mode: "onSubmit",
  });
}
