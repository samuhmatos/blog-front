"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { postService } from "..";

export function useRemovePost() {
  return useMutation<number, void>(postService.remove, {
    onSuccess(data) {
      toastUtils.show({
        message: "Post movido para lixeira!",
        type: "warning",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
