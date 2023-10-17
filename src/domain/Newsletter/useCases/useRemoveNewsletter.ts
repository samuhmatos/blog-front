"use client";
import { useState } from "react";
import { Newsletter, newsletterService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useRemoveNewsletter() {
  const [loading, setLoading] = useState<boolean>(false);

  function remove(params: Pick<Newsletter, "email" | "token">) {
    setLoading(true);
    newsletterService
      .remove(params)
      .then((res) => {
        toastUtils.show({
          message: "Agora é oficial, você se desinscreveu da newsletter 🥺",
          type: "warning",
        });
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err, {
          "404":
            "Credenciais inválidas! Clique no link do email e tente novamente!",
        });
      })
      .finally(() => setLoading(false));
  }

  return {
    loading,
    remove,
  };
}
