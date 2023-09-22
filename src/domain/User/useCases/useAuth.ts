"use client";
import { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@context";
import { Auth, ErrorApi } from "@api";
import { userService } from "../userService";
import { deleteCookie, setCookie } from "cookies-next";
import { errorUtils, storageUtils } from "@utils";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export function useAuth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string[] | null>(null);
  const { setUser, user, token, setToken } = useContext(AuthContext);

  const router = useRouter();
  const pathName = usePathname();

  function setSuccessData(response: Auth) {
    setCookie("token", response.token);
    setCookie("user", response.user);

    setUser(response.user);
    setToken(response.token);
  }

  async function signIn(
    params: Pick<Props, "email" | "password">,
    handleClose: () => void
  ) {
    setUser(null);
    setLoading(true);

    userService
      .login(params)
      .then(async (response) => {
        setSuccessData(response);

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
      .then(async (response) => {
        setSuccessData(response);

        handleClose();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
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

        if (!pathName.includes("dashboard")) {
          router.push("/");
        }

        setUser(null);
        setToken(null);
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  }

  function loadStorageData() {
    const { user: userStorage, token: tokenStorage } =
      storageUtils.loadStorageData();

    setUser(userStorage);
    setToken(tokenStorage);
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

// TODO: logut fazer os redirecionamentos
