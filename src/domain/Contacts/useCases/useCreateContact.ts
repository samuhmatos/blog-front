"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { contactService } from "../contactService";
import { ContactParamsProps } from "../contactApi";

export function useCreateContact() {
  return useMutation<ContactParamsProps, void>(contactService.create, {
    onSuccess() {
      toastUtils.show({
        message: "Enviado com sucesso!",
        type: "success",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
