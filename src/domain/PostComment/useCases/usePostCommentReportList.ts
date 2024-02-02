"use client";
import { QueryKeys, usePaginatedList } from "@infra";
import { PaginateCommentWithReports, PostComment } from "../PostCommentType";
import { postCommentService } from "../postCommentService";

export function usePostCommentReportList(params: PaginateCommentWithReports) {
  async function getList() {
    return postCommentService.paginateWithReports(params);
  }

  return usePaginatedList<PostComment>(
    [QueryKeys.PostCommentReportList, params.page, params.perPage],
    getList
  );
}
