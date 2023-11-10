"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { newsletterService } from "../newsletterService";
import { Newsletter } from "..";

export function useCreateNewsletter() {
  return useMutation<string, Newsletter>(newsletterService.create, {
    onSuccess(data) {
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
