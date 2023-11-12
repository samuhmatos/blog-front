"use client";
import { useMutation } from "@infra";
import { useComment } from "@context";
import { errorUtils } from "@utils";

import { PostComment, PostCommentParams, postCommentService } from "..";

export function usePostCommentUpdate() {
  const { comments, setContext } = useComment();

  return useMutation<PostCommentParams, PostComment>(postCommentService.edit, {
    onSuccess(data) {
      var updatedCommentList = comments.map((comment) => {
        let _comment_ = comment.id === data.id ? data : comment;

        return {
          ..._comment_,
          answers: comment.answers?.map((answer) =>
            answer.id === data.id ? data : answer
          ),
        };
      });

      setContext(updatedCommentList, data, true);
    },
    onError(error) {
      errorUtils.setGlobalErrorMessage(error);
    },
  });
}
