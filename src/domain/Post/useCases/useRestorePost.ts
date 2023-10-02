"use client";import { useState } from "react";
import { Post, postService } from "..";
import { errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useRestorePost() {
  const [loading, setLoading] = useState<boolean>();
  const [post, setPost] = useState<Post>();

  async function restore(id: number, callBack: () => void) {
    setLoading(true);
    postService
      .restore(id)
      .then((res) => {
        setPost(res);

        callBack();
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
    post,
    restore,
  };
}
