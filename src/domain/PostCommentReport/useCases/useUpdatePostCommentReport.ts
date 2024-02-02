"use client";
import { useMutation } from "@infra";
import { UpdatePostCommentReportParams } from "../postCommentReportTypes";
import { postCommentReportService } from "../postCommentReportService";
import { errorUtils, toastUtils } from "@utils";

export function useUpdatePostCommentReport() {
  return useMutation<UpdatePostCommentReportParams, void>(
    postCommentReportService.update,
    {
      onSuccess() {
        toastUtils.show({ message: "Report Atualizado com sucesso!" });
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
