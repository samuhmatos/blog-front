"use client";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Auth, ErrorApi } from "@api";
import { deleteCookie, setCookie } from "cookies-next";
import { errorUtils, storageUtils } from "@utils";
import { changeRoute } from "nextjs-progressloader";
import { AuthService } from "./AuthProvider";
import { SignInParams, SignUpParams, authService, userService } from "@domain";

export function useAuthProvider(): AuthService {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<AuthService["user"]>(null);

  function setSuccessData(response: Auth) {
    setCookie("token", response.token);
    setUser(response.user);
  }

  async function signIn(params: SignInParams, callbackFn: () => void) {
    setUser(null);
    setLoading(true);

    userService
      .login(params)
      .then(async (response) => {
        setSuccessData(response);

        callbackFn();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        let errors = errorUtils.getErrorMessages(err.response!.data);

        setError(errors[0]);
      })
      .finally(() => setLoading(false));
  }

  async function signUp(params: SignUpParams, callbackFn: () => void) {
    setLoading(true);

    userService
      .register(params)
      .then(async (response) => {
        setSuccessData(response);

        callbackFn();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        let errors = errorUtils.getErrorMessages(err.response!.data);
        setError(errors[0]);
      })
      .finally(() => setLoading(false));
  }

  async function logout(pathname: string) {
    setLoading(true);
    userService
      .logout()
      .then(() => {
        deleteCookie("token");

        if (pathname.includes("dashboard")) {
          changeRoute("home");
        }

        setUser(null);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => setLoading(false));
  }

  async function loadStorageData() {
    const token = storageUtils.getOne("token");

    if (token) {
      setLoading(true);

      try {
        const currentUser = await authService.currentUser();
        setUser(currentUser);
      } catch (_) {}
      setLoading(false);
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
    errorMessage: error,
    user,
    setUser,
  };
}
