"use client";import { useMutation } from "@infra";
import { useComment } from "@context";
import { errorUtils } from "@utils";

import { PostComment, PostCommentParams, postCommentService } from "..";

export function usePostCommentCreate() {
  const { comments, setContext } = useComment();

  return useMutation<PostCommentParams, PostComment>(
    postCommentService.create,
    {
      onSuccess(data) {
        if (data.parentId) {
          const commentList = comments.map((comment) => {
            return {
              ...comment,
              answers:
                comment.id === data.parentId
                  ? [...(comment.answers || []), data]
                  : comment.answers,
            };
          });

          setContext(commentList, data, true);
        } else {
          setContext([data, ...comments], data, true);
        }
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
