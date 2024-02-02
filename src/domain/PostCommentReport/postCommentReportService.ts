import { PostCommentReportParams, UpdatePostCommentReportParams } from ".";import { postCommentReportApi } from "./postCommentReportApi";

async function create({
  commentId,
  postId,
  message,
}: PostCommentReportParams): Promise<void> {
  return await postCommentReportApi.create({
    post_id: postId,
    comment_id: commentId,
    message,
  });
}

async function update(params: UpdatePostCommentReportParams): Promise<void> {
  return await postCommentReportApi.update(params);
}

export const postCommentReportService = {
  create,
  update,
};
