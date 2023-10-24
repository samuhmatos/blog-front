"use client";
import { useState } from "react";
import { UserAuthParams, userService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useUserCreate() {
  const [loading, setLoading] = useState<boolean>(false);

  function create(
    params: UserAuthParams & { is_admin: boolean },
    callbackFn: () => void
  ) {
    setLoading(true);

    userService
      .create(params)
      .then(() => {
        toastUtils.show({
          message: "Usuário criado com sucesso!",
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
    create,
  };
}
