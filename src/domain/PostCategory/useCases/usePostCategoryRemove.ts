"use client";
import { toastUtils, errorUtils } from "@utils";
import { useMutation } from "@infra";

import { postCategoryService } from "..";

export function usePostCategoryRemove() {
  return useMutation<number, void>(postCategoryService.remove, {
    onSuccess(data) {
      toastUtils.show({
        message: "Categoria movida para a lixeira",
        type: "warning",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
