"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { UpdateCategoryParams, postCategoryService } from "..";

export function usePostCategoryUpdate() {
  return useMutation<UpdateCategoryParams, void>(postCategoryService.update, {
    onSuccess() {
      toastUtils.show({
        message: "Categoria atualizada com sucesso!",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
