"use client";

import { useState } from "react";
import { Post, postService } from "..";
import { errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function useGetPost() {
  const [loading, setLoading] = useState<boolean>();
  const [post, setPost] = useState<Post>();

  async function getOne(id: string) {
    setLoading(true);
    postService
      .getOne(id)
      .then((res) => {
        setPost(res);
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
    getOne,
  };
}
