import { Page, apiAdapter } from "@api";
import { PaginateCommentWithReports, PostComment, PostCommentParams } from ".";
import { postCommentApi } from "./postCommentApi";
import { postCommentAdapter } from "./postCommentAdapter";

export interface EditPostCommentProps
  extends Omit<PostCommentParams, "parentId"> {
  commentId: number;
}

async function create({
  comment,
  parentId,
  postId,
}: PostCommentParams): Promise<PostComment> {
  const commentAPI = await postCommentApi.create({
    comment,
    parent_id: parentId,
    post_id: postId,
  });

  return postCommentAdapter.toPostComment(commentAPI);
}

async function edit({
  comment,
  postId,
  commentId,
}: PostCommentParams): Promise<PostComment> {
  const commentAPI = await postCommentApi.edit({
    comment,
    comment_id: commentId!,
    post_id: postId,
  });

  const commentAdapted = postCommentAdapter.toPostComment(commentAPI);
  return commentAdapted;
}

async function destroy({
  commentId,
  postId,
}: Omit<EditPostCommentProps, "comment">): Promise<void> {
  return await postCommentApi.destroy({
    comment_id: commentId,
    post_id: postId,
  });
}

async function paginateWithReports(
  params: PaginateCommentWithReports
): Promise<Page<PostComment>> {
  const page = await postCommentApi.paginateWithReports({
    ...params,
    per_page: params.perPage,
    reports_type: params.reportsType,
  });

  return {
    meta: apiAdapter.toMetaDataPage(page.meta),
    data: page.data.map(postCommentAdapter.toPostComment),
  };
}

export const postCommentService = {
  create,
  edit,
  destroy,
  paginateWithReports,
};
