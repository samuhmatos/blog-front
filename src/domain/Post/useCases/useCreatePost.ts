"use client";
import { errorUtils, eventUtils, toastUtils } from "@utils";
import { useMutation } from "@infra";

import { Post, postService } from "..";

export function useCreatePost() {
  return useMutation<FormData, Post>(postService.create, {
    onSuccess(data) {
      eventUtils.emit("close-modal");

      if (data.isDraft) {
        toastUtils.show({
          message: "Rascunho salvo com sucesso!",
          type: "info",
        });
      } else {
        toastUtils.show({
          message: "Post publicado com sucesso!",
          type: "success",
        });
      }
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
