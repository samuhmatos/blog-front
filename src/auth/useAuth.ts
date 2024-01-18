"use client";
import { useSession } from "next-auth/react";

export function useAuth() {
  const { data, update, status } = useSession();

  return {
    status,
    update,
    session: data,
  };
}
