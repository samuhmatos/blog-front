"use client";
import { errorUtils } from "@utils";
import { useMutation } from "@infra";

import { Post, postService } from "..";

export function useRestorePost() {
  return useMutation<number, Post>(postService.restore, {
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
