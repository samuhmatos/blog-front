"use client";
import { useMutation } from "@infra";
import { useComment } from "@context";
import { errorUtils } from "@utils";

import { EditPostCommentProps, PostComment, postCommentService } from "..";

export function usePostCommentRemove(commentId: number) {
  const { comments, setContext } = useComment();

  return useMutation<Omit<EditPostCommentProps, "comment">, void>(
    postCommentService.destroy,
    {
      onSuccess() {
        var updatedCommentList = comments
          .filter((comment) => comment.id !== commentId)
          .map((comment) => {
            return {
              ...comment,
              answers: comment.answers?.filter(
                (answer) => answer.id !== commentId
              ),
            };
          });

        setContext(updatedCommentList, null, true);
      },
      onError(error) {
        errorUtils.setGlobalErrorMessage(error);
      },
    }
  );
}
