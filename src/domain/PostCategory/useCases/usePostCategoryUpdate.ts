"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { Category, UpdateCategoryParams, postCategoryService } from "..";

export function usePostCategoryUpdate() {
  return useMutation<UpdateCategoryParams, Category>(
    postCategoryService.update,
    {
      onSuccess(data) {
        toastUtils.show({
          message: "Categoria atualizada com sucesso!",
        });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
