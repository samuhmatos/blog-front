"use client";
import { useState } from "react";
import { Post, UpdateServiceProps, postService } from "..";
import { errorUtils, toastUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

interface Props {
  postId: number;
  formData: FormData | UpdateServiceProps;
  reset: () => void;
}

export function useUpdatePost() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  function update({ postId, formData, reset }: Props) {
    setLoading(true);

    postService
      .update(postId, formData)
      .then((res) => {
        setData(res);

        toastUtils.show({
          message: "Post atualizado com sucesso!",
          type: "success",
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
    data,
    loading,
    update,
  };
}
