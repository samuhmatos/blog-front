"use client";
import { useState, useContext } from "react";
import { PostComment, PostCommentParams } from "..";
import {
  EditPostCommentProps,
  postCommentService,
} from "../postCommentService";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";
import { errorUtils, toastUtils } from "@utils";
import { CommentContext } from "@context";

export interface UsePostCommentProps {
  type: "create" | "edit";
  params: PostCommentParams;
  callBack: () => void;
}

export function usePostComment() {
  const { setCommentState, comments, replyTo, comment, action } =
    useContext(CommentContext);
  const [loading, setLoading] = useState<boolean>(false);

  function setContext(
    newComments: PostComment[],
    res?: PostComment,
    reset?: boolean
  ): void {
    setCommentState((prev) => ({
      ...prev,
      replyTo: reset ? null : prev.replyTo,
      comments: newComments,
      comment: res || null,
      action: reset ? "create" : prev.action,
    }));
  }

  async function createUpdate({ type, params, callBack }: UsePostCommentProps) {
    setLoading(true);

    postCommentService[type]({
      comment: params.comment,
      postId: params.postId,
      commentId: params.commentId,
      parentId: params.parentId,
    })
      .then((res) => {
        if (action == "create") {
          if (res.parentId) {
            var parentCommentFiltered = comments.filter(
              (comment) => comment.id === res.parentId
            );
            parentCommentFiltered.push(res);

            var restComments = comments.filter(
              (comment) => comment.id !== res.parentId
            );

            setContext([...parentCommentFiltered, ...restComments], res, true);
          } else {
            setContext([res, ...comments], res, true);
          }
        } else {
          var newComments = comments.map((comm) => {
            if (comm.id === res.id) {
              return {
                ...res,
                answers: comm.answers,
              };
            } else {
              if (comm.answers) {
                comm.answers?.map((ans) => {
                  if (ans.id === res.id) {
                    return res;
                  } else {
                    return ans;
                  }
                });
              } else {
                return comm;
              }

              return comm;
            }
          });

          setContext(newComments, res, true);
        }

        callBack && callBack();
      })
      .catch((err: AxiosError<ErrorApi>) => {
        console.log(err);
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function destroyComment(params: Omit<EditPostCommentProps, "comment">) {
    setLoading(true);
    postCommentService
      .destroy(params)
      .then((res) => {
        var filteredComments = comments.filter((comm) => {
          if (comm.id !== params.commentId) {
            comm.answers?.filter((answ) => {
              if (answ.id !== params.commentId) {
                return answ;
              }
            });

            return comm;
          }
        });

        setContext(filteredComments, undefined, true);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function reportComment(
    postId: number,
    commentId: number,
    reason: string,
    callBack?: () => void
  ) {
    setLoading(true);
    postCommentService
      .report(postId, commentId, reason)
      .then((res) => {
        toastUtils.show({
          message: "Obrigado por reportar! Estaremos avaliando em breve",
          type: "success",
        });

        callBack && callBack();
      })
      .catch((err) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    comments,
    comment,
    replyTo,
    setCommentState,
    createUpdate,
    action,
    destroyComment,
    reportComment,
  };
}
