"use client";
import { useState } from "react";
import { useRouter } from "nextjs-progressloader";
import { signIn } from "next-auth/react";
import { isAxiosError } from "axios";

import { RequestError } from "@api";
import { UserAuthParams } from "@domain";

import { authService } from "..";

export function useSignUp() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function signUp(params: UserAuthParams) {
    setLoading(true);

    try {
      await authService.register(params);
      const userLogged = await signIn("credentials", {
        ...params,
        redirect: false,
      });

      if (userLogged?.error || !userLogged?.ok) {
        setError(userLogged!.error);
        return;
      }

      if (userLogged?.ok) {
        try {
          router.replace("redirect");
        } catch (error) {
          router.replace("home");
        }
        return;
      }
    } catch (err) {
      const error = err as Error | RequestError;

      if (isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    error,
    signUp,
    loading,
  };
}
