"use client";import { useState } from "react";
import { Category, postCategoryService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function usePostCategoryUpdate() {
  const [loading, setLoading] = useState<boolean>(false);

  function update(
    categoryId: number,
    params: Pick<Category, "name" | "description">,
    callback: () => void
  ) {
    setLoading(true);

    postCategoryService
      .update(categoryId, params)
      .then((res) => {
        toastUtils.show({
          message: "Categoria atualizada com sucesso!",
        });
        callback();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    update,
  };
}
