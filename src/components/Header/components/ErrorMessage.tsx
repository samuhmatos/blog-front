"use client";
import { toastUtils } from "@utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
