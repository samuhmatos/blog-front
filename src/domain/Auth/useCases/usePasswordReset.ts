"use client";
import { authService } from "../authService";
import { errorUtils, toastUtils } from "@utils";
import { changeRoute } from "nextjs-progressloader";
import { PasswordResetSchema } from "../../../app/auth/password-reset/[hash]/passwordResetSchema";
import { useMutation } from "@infra";

export function usePasswordReset() {
  return useMutation<PasswordResetSchema, { status: string }>(
    authService.passwordReset,
    {
      onSuccess(data) {
        toastUtils.show({ message: data.status });

        changeRoute("login");
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
