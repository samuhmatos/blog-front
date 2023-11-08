"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { toastUtils } from "@utils";

export function ErrorMessage({ errorMessage }: { errorMessage: string }) {
  const pathName = usePathname();

  useEffect(() => {
    toastUtils.show({
      message: errorMessage,
      type: "error",
    });

    window.history.pushState({}, document.title, pathName);
  }, []);

  return null;
}
