"use client";
import { useState } from "react";
import { postCategoryService } from "..";
import { toastUtils, errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function usePostCategoryRemove() {
  const [loading, setLoading] = useState<boolean>(false);

  function remove(categoryId: number, callBack: () => void) {
    setLoading(true);

    postCategoryService
      .remove(categoryId)
      .then((res) => {
        toastUtils.show({
          message: "Categoria movida para a lixeira",
          type: "warning",
        });

        callBack();
      })
      .catch((res: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(res);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    remove,
  };
}
