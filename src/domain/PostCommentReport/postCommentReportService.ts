import { PostCommentReportParams } from ".";
import { postCommentReportApi } from "./postCommentReportApi";

async function create({
  commentId,
  postId,
  reason,
}: PostCommentReportParams): Promise<void> {
  return await postCommentReportApi.create({
    post_id: postId,
    comment_id: commentId,
    reason,
  });
}

export const postCommentReportService = {
  create,
};
