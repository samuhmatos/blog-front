"use client";import { userService } from "../userService";
import { Auth } from "@api";
import { setCookie } from "cookies-next";
import { useAuth, useAuthService } from "@context";
import { errorUtils, toastUtils } from "@utils";
import { UserUpdateParams } from "..";
import { useMutation } from "@infra";

export function useUserUpdate(callBack?: () => void) {
  const { setUser } = useAuthService();
  const { user: authenticatedUser } = useAuth();

  return useMutation<UserUpdateParams, Partial<Auth>>(userService.update, {
    onSuccess(data) {
      if (data.user?.id === authenticatedUser?.id) {
        if (data.token) {
          setCookie("token", data.token);
        }

        setUser(data.user!);
      }

      toastUtils.show({
        message: "Atualizado com sucesso!",
        type: "success",
      });

      callBack && callBack();
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
