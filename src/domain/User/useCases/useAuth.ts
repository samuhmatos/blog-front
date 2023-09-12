"use client";import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@context";
import { ErrorApi } from "@api";
import { userService } from "../userService";
import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { errorUtils } from "@utils";
import { User } from "..";

interface Props {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[] | null>(null);
  const { setUser, user, token, setToken, setCSRF, CSRF } =
    useContext(AuthContext);

  async function signIn(
    params: Pick<Props, "email" | "password">,
    handleClose: () => void
  ) {
    setUser(null);
    setLoading(true);

    userService
      .login(params)
      .then((response) => {
        setCookie("token", response.token);
        setCookie("user", response.user);

        setUser(response.user);
        setToken(response.token);

        handleClose();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        let errors = errorUtils.getErrorMessages(err.response!.data);

        setError(errors);
      })
      .finally(() => setLoading(false));
  }

  async function signUp(params: Props, handleClose: () => void) {
    setUser(null);
    setLoading(true);

    userService
      .register(params)
      .then((response) => {
        setCookie("token", response.token);
        setCookie("user", response.user);

        setUser(response.user);
        setToken(response.token);

        handleClose();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        let errors = errorUtils.getErrorMessages(err.response!.data);
        setError(errors);
      })
      .finally(() => setLoading(false));
  }

  async function logout() {
    userService
      .logout()
      .then(() => {
        deleteCookie("user");
        deleteCookie("token");
        deleteCookie("CSRF");

        setUser(null);
        setToken(null);
        setCSRF(null);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }

  function loadStorageData() {
    const userStorage = getCookie("user");
    const tokenStorage = getCookie("token");

    if (userStorage && tokenStorage) {
      const userParsed: User = JSON.parse(userStorage);

      if (!user) setUser(userParsed);
      if (!token) setToken(tokenStorage);
    } else {
      setUser(null);
      setToken(null);
    }
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return {
    signIn,
    signUp,
    logout,
    loading,
    error,
    user,
    token,
  };
}
