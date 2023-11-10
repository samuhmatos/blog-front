"use client";
import { authService } from "../authService";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

export function useForgotPassword() {
  return useMutation<string, { status: string }>(authService.forgotPassword, {
    onSuccess(data) {
      toastUtils.show({ message: data.status });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
