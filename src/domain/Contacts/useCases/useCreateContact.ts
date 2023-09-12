"use client";import { useState } from "react";
import { contactService } from "../contactService";
import { ContactParamsProps } from "../contactApi";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useCreateContact() {
  const [loading, setLoading] = useState<boolean>(false);

  async function create(params: ContactParamsProps, callBack?: () => void) {
    setLoading(true);
    contactService
      .create(params)
      .then(() => {
        toastUtils.show({
          message: "Enviado com sucesso!",
          type: "success",
        });
        callBack && callBack();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err.response);
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
