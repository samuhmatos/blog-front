"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { Category, postCategoryService } from "..";

interface Props {
  name: string;
  description: string;
}
export function usePostCategoryCreate() {
  return useMutation<Pick<Category, "name" | "description">, Category>(
    postCategoryService.create,
    {
      onSuccess(data) {
        toastUtils.show({
          message: "Categoria criada com sucesso!",
        });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
