"use client";
import { useState } from "react";
import { newsletterService } from "../newsletterService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { errorUtils, toastUtils } from "@utils";

export function useCreateNewsletter() {
  const [loading, setLoading] = useState<boolean>(false);

  function create(email: string, callback: () => void) {
    setLoading(true);

    newsletterService
      .create(email)
      .then((res) => {
        toastUtils.show({
          message:
            "Cadastrado em nossa Newsletter com sucesso! Excelente notícia!",
          type: "success",
        });

        callback();
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
    create,
  };
}
