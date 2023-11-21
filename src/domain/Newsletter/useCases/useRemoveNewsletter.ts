"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { Newsletter, newsletterService } from "..";

export function useRemoveNewsletter() {
  return useMutation<Pick<Newsletter, "email" | "token">, void>(
    newsletterService.remove,
    {
      onSuccess() {
        toastUtils.show({
          message: "Agora é oficial, você se desinscreveu da newsletter 🥺",
          type: "warning",
        });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error, {
          "404":
            "Credenciais inválidas! Clique no link do email e tente novamente!",
        });
      },
    }
  );
}
