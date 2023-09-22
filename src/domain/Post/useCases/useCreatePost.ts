"use client";
import { useState } from "react";
import { postService } from "..";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { errorUtils, toastUtils } from "@utils";

interface CreatePostProps {
  formData: FormData;
  reset: () => void;
  isDraft: boolean;
}
export function useCreatePost() {
  const [loadingPublish, setLoadingPublish] = useState<boolean>(false);
  const [loadingDraft, setLoadingDraft] = useState<boolean>(false);

  function startLoading(isDraft: boolean) {
    if (isDraft) {
      setLoadingDraft(true);
    } else {
      setLoadingPublish(true);
    }
  }

  function endLoading(isDraft: boolean) {
    if (isDraft) {
      setLoadingDraft(false);
    } else {
      setLoadingPublish(false);
    }
  }

  async function createPost({ formData, reset, isDraft }: CreatePostProps) {
    startLoading(isDraft);
    postService
      .create(formData)
      .then((res) => {
        if (isDraft) {
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
        reset();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        endLoading(isDraft);
      });
  }

  return {
    loadingDraft,
    loadingPublish,
    createPost,
  };
}
