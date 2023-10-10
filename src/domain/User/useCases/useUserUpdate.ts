"use client";import { useContext, useState } from "react";
import { userService } from "../userService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { setCookie } from "cookies-next";
import { AuthContext } from "@context";
import { errorUtils, toastUtils } from "@utils";

export function useUserUpdate() {
  const { setUser, setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);

  function update(userId: number, params: FormData, callBack?: () => void) {
    setLoading(true);

    userService
      .update(userId, params)
      .then((res) => {
        if (res.token) {
          setCookie("token", res.token);
          setToken(res.token);
        }
        setCookie("user", res.user);
        setUser(res.user!);

        toastUtils.show({
          message: "Atualizado com sucesso!",
          type: "success",
        });

        callBack && callBack();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    update,
  };
}
