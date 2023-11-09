"use client";
import { useMutation } from "@infra";
import { PostCommentReportParams, postCommentReportService } from "..";
import { errorUtils, toastUtils } from "@utils";

export function useCreatePostCommentReport() {
  return useMutation<PostCommentReportParams, void>(
    postCommentReportService.create,
    {
      onSuccess(data) {
        toastUtils.show({
          message: "Obrigado por reportar! Estaremos avaliando em breve",
          type: "success",
        });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
