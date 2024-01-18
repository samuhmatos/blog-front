"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-progressloader";
import { signOut as SignOutNextAuth } from "next-auth/react";

export function useSignOut() {
  const [loading, setLoading] = useState<boolean>();
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    setLoading(true);
    await SignOutNextAuth({
      redirect: false,
    });

    if (pathname.startsWith("/dashboard")) {
      router.push("home");
    }

    setLoading(false);
  }

  return {
    loading,
    signOut,
  };
}
