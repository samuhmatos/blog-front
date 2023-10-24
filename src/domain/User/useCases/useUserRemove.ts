"use client";
import { useState } from "react";
import { userService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useUserRemove() {
  const [loading, setLoading] = useState<boolean>(false);

  function remove(userId: number, callbackFn: () => void) {
    setLoading(true);

    userService
      .remove(userId)
      .then(() => {
        toastUtils.show({
          message: "Usuário excluído com sucesso!",
          type: "warning",
        });

        callbackFn();
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
    remove,
  };
}
