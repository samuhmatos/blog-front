import { ErrorApi } from "@api";
import { AxiosError } from "axios";
import { toastUtils } from "./toastUtils";

function getErrorMessages(errorAPI: ErrorApi): string[] {
  const errorMessages: string[] = [];

  for (const fieldErrors of Object.values(errorAPI.errors)) {
    errorMessages.push(...fieldErrors);
  }

  return errorMessages;
}

interface ErrorCustomProps {
  401?: string;
  403?: string;
  404?: string;
  422?: string;
}

function setGlobalErrorMessage(
  err: AxiosError<ErrorApi>,
  customMessage?: ErrorCustomProps
) {
  if (err.response?.status) {
    switch (err.response.status) {
      case 401:
        toastUtils.show({
          type: "error",
          message: customMessage?.[401] || "faça o login primeiro!",
        });
        break;

      case 403:
        toastUtils.show({
          type: "error",
          message: customMessage?.[403] || "Ação não autorizada!",
        });
        break;
      case 404:
        toastUtils.show({
          type: "error",
          message: customMessage?.[404] || "Um erro aconteceu",
        });
        break;
      case 422:
        toastUtils.show({
          type: "error",
          message: customMessage?.[422] || err.response!.data.message,
        });
        break;
      default:
        toastUtils.show({
          type: "error",
          message: "Um erro aconteceu",
        });
        break;
    }
  }
}

export const errorUtils = {
  getErrorMessages,
  setGlobalErrorMessage,
};
