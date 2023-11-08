"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";
import { userService } from "..";

export function useUserRemove() {
  return useMutation<number, void>(userService.remove, {
    onSuccess() {
      toastUtils.show({
        message: "Usuário excluído com sucesso!",
        type: "warning",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
