"use client";
import { errorUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";
import { Post, UpdatePostParams, UpdateServiceProps, postService } from "..";

export function useUpdatePost() {
  return useMutation<UpdatePostParams, Post>(postService.update, {
    onSuccess() {
      toastUtils.show({
        message: "Post atualizado com sucesso!",
        type: "success",
      });
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
