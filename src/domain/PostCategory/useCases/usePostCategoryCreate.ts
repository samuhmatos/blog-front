"use client";import { useState } from "react";
import { Category, postCategoryService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

interface Props {
  name: string;
  description: string;
}
export function usePostCategoryCreate() {
  const [loading, setLoading] = useState<boolean>(false);

  async function create(
    params: Pick<Category, "name" | "description">,
    callBack: () => void
  ) {
    setLoading(true);
    postCategoryService
      .create(params)
      .then((res) => {
        toastUtils.show({
          message: "Categoria criada com sucesso!",
        });

        callBack();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    create,
  };
}
