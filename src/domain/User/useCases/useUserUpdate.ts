"use client";
import { Auth } from "@api";
import { useMutation } from "@infra";
import { errorUtils, toastUtils } from "@utils";
import { useAuth } from "@auth";

import { userService } from "../userService";
import { UserUpdateParams } from "..";

export function useUserUpdate(callBack?: () => void) {
  const { session, update } = useAuth();

  const authenticatedUser = session?.user;

  return useMutation<UserUpdateParams, Partial<Auth>>(userService.update, {
    async onSuccess(data) {
      if (data.user?.id == authenticatedUser?.id) {
        let updatedSession = {
          ...session,
          user: { ...session?.user, ...data.user },
        };

        if (data.token) {
          updatedSession.user.accessToken = data.token;
        }

        await update(updatedSession);
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
