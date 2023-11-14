"use client";

import { useMutation } from "@infra";
import { ReturnUploadPostContent } from "../postApi";
import { postService } from "..";

export function useUploadPostContent() {
  return useMutation<FormData, ReturnUploadPostContent>(
    postService.uploadPostContent
  );
}
