"use client";
import { useState } from "react";
import { User, userService } from "..";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { errorUtils } from "@utils";

export function useUserGet() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User>();

  function show(userId: number) {
    setLoading(true);

    userService
      .show(userId)
      .then((res) => {
        setUser(res);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    user,
    show,
  };
}
