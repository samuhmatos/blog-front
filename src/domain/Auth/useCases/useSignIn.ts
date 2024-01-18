"use client";
import { useState } from "react";
import { useRouter } from "nextjs-progressloader";
import { signIn as SignInNextAuth } from "next-auth/react";

import { SignInParams } from "..";

export function useSignIn() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function signIn(params: SignInParams) {
    setLoading(true);
    const res = await SignInNextAuth("credentials", {
      ...params,
      redirect: false,
    });
    setLoading(false);

    if (res?.error || !res?.ok) {
      setErrorMessage(res!.error);
      return;
    }

    if (res?.ok) {
      try {
        router.replace("redirect");
      } catch (error) {
        router.replace("home");
      }
      return;
    }
  }

  return {
    loading,
    errorMessage,
    signIn,
  };
}
