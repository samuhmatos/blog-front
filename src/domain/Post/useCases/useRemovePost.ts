"use client";import { useState } from "react";
import { postService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useRemovePost() {
  const [loading, setLoading] = useState<boolean>(false);

  function remove(postId: number, reset: () => void) {
    setLoading(true);

    postService
      .remove(postId)
      .then((res) => {
        toastUtils.show({
          message: "Post movido para lixeira!",
          type: "warning",
        });

        reset();
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
    remove,
  };
}
