"use client";
import { useState } from "react";
import { userService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useUserRestore() {
  const [loading, setLoading] = useState<boolean>(false);

  function restore(userId: number, callbackFn: () => void) {
    setLoading(true);

    userService
      .restore(userId)
      .then(() => {
        toastUtils.show({
          message: "Usuário restaurado com sucesso!",
        });

        callbackFn();
      })
      .catch((error: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(error);
      })
      .finally(() => setLoading(false));
  }

  return {
    loading,
    restore,
  };
}
