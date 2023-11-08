"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";
import { userService } from "..";

export function useUserRestore() {
  return useMutation<number, void>(userService.restore, {
    onSuccess() {
      toastUtils.show({
        message: "Usuário restaurado com sucesso!",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
