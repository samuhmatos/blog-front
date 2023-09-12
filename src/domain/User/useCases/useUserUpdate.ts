"use client";
import { useContext, useState } from "react";
import { userService } from "../userService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { setCookie } from "cookies-next";
import { AuthContext } from "@context";
import { errorUtils } from "@utils";

export function useUserUpdate() {
  const { setUser, setToken } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);

  function update(userId: number, params: FormData) {
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
