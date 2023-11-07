"use client";

import { useForm } from "@hooks";
import { UserProfileSchema, userProfileSchema } from "./UserProfileSchema";

export function useProfileForm() {
  return useForm<UserProfileSchema>(userProfileSchema);
}
