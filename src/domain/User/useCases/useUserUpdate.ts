"use client";
import { useContext, useState } from "react";
import { userService } from "../userService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { setCookie } from "cookies-next";
import { AuthContext } from "@context";
import { errorUtils, toastUtils } from "@utils";
import { User } from "..";

export function useUserUpdate() {
  const {
    setUser,
    setToken,
    user: authenticatedUser,
  } = useContext(AuthContext);

  const [data, setData] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);

  function update(userId: number, params: FormData, callBack?: () => void) {
    setLoading(true);

    userService
      .update(userId, params)
      .then((res) => {
        if (res.user?.id === authenticatedUser?.id) {
          if (res.token) {
            setCookie("token", res.token);
            setToken(res.token);
          }

          setCookie("user", res.user);
          setUser(res.user!);
        }

        setData(res.user);

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
    user: data,
  };
}
