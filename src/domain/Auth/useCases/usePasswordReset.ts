"use client";
import { useState } from "react";
import { authService } from "../authService";
import { PasswordResetSchema } from "@schema";
import { errorUtils, toastUtils } from "@utils";
import { changeRoute } from "nextjs-progressloader";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function usePasswordReset() {
  const [loading, setLoading] = useState<boolean>(false);

  function action(params: PasswordResetSchema) {
    setLoading(true);

    authService
      .passwordReset(params)
      .then((res) => {
        toastUtils.show({ message: res.status });

        changeRoute("login");
      })
      .catch((error: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    action,
  };
}
