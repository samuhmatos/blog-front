import {
  PostCommentReport,
  PostCommentReportApi,
} from "./postCommentReportTypes";

function toPostCommentReport(
  postCommentReportApi: PostCommentReportApi
): PostCommentReport {
  return {
    id: postCommentReportApi.id,
    commentId: postCommentReportApi.comment_id,
    message: postCommentReportApi.message,
    status: postCommentReportApi.status,
    userId: postCommentReportApi.user_id,

    created_at: postCommentReportApi.created_at,
  };
}

export const postCommentReportAdapter = {
  toPostCommentReport,
};
