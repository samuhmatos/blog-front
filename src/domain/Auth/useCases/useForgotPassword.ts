"use client";import { useState } from "react";
import { authService } from "../authService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { errorUtils, toastUtils } from "@utils";

export function useForgotPassword() {
  const [loading, setLoading] = useState<boolean>(false);

  function action(email: string) {
    setLoading(true);
    authService
      .forgotPassword(email)
      .then((res) => {
        toastUtils.show({ message: res.status });
      })
      .catch((error: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(error);
      })
      .finally(() => setLoading(false));
  }

  return {
    loading,
    action,
  };
}
