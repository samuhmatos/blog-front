"use client";
import { changeRoute } from "nextjs-progressloader";
import { errorUtils, toastUtils } from "@utils";
import { authService } from "../authService";
import { useMutation } from "@infra";

import { PasswordResetSchema } from "../../../app/auth/password-reset/[hash]/passwordResetSchema";

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
