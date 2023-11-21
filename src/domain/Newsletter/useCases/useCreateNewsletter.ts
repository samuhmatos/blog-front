"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { newsletterService } from "../newsletterService";

export function useCreateNewsletter() {
  return useMutation<string, void>(newsletterService.create, {
    onSuccess() {
      toastUtils.show({
        message:
          "Cadastrado em nossa Newsletter com sucesso! Excelente notícia!",
        type: "success",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
