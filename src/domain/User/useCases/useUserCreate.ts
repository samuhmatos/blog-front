"use client";
import { User, UserAuthParams, userService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

export function useUserCreate() {
  return useMutation<UserAuthParams & { is_admin: boolean }, User>(
    userService.create,
    {
      onSuccess(data) {
        toastUtils.show({
          message: "Usuário criado com sucesso!",
        });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
