"use client";
import { useState } from "react";
import { CommentService, CommentState } from "./commentProviders";
import {
  EditPostCommentProps,
  PostComment,
  PostCommentParams,
  postCommentService,
} from "@domain";
import { RequestError } from "@api";
import { errorUtils } from "@utils";

export function useCommentProvider(): CommentService {
  const [loading, setLoading] = useState<boolean>(false);

  const [commentState, setCommentState] = useState<CommentState>({
    comment: null,
    comments: [],
    replyTo: null,
    action: "create",
  });

  function setContext(
    newComments: PostComment[],
    acutalComment?: PostComment,
    reset?: boolean
  ): void {
    setCommentState((prev) => ({
      ...prev,
      replyTo: reset ? null : prev.replyTo,
      comments: newComments,
      comment: acutalComment || null,
      action: reset ? "create" : prev.action,
    }));
  }

  function createComment(params: PostCommentParams, callbackFn: () => void) {
    setLoading(true);
    postCommentService
      .create(params)
      .then((res) => {
        if (res.parentId) {
          var parentCommentFiltered = commentState.comments.filter(
            (comment) => comment.id === res.parentId
          );
          parentCommentFiltered.push(res);

          var restComments = commentState.comments.filter(
            (comment) => comment.id !== res.parentId
          );

          setContext([...parentCommentFiltered, ...restComments], res, true);
        } else {
          setContext([res, ...commentState.comments], res, true);
        }

        callbackFn();
      })
      .catch((err: RequestError) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => setLoading(false));
  }

  function updateComment(params: PostCommentParams, callbackFn: () => void) {
    setLoading(true);
    postCommentService
      .edit(params)
      .then((res) => {
        var newComments = commentState.comments.map((_comment) => {
          if (_comment.id === res.id) {
            return {
              ...res,
              answers: _comment.answers,
            };
          } else {
            if (_comment.answers) {
              _comment.answers?.map((ans) => {
                if (ans.id === res.id) {
                  return res;
                } else {
                  return ans;
                }
              });
            } else {
              return _comment;
            }

            return _comment;
          }
        });

        setContext(newComments, res, true);

        callbackFn();
      })
      .catch((err: RequestError) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => setLoading(false));
  }

  function removeComment(params: Omit<EditPostCommentProps, "comment">) {
    setLoading(true);
    postCommentService
      .destroy(params)
      .then((res) => {
        var filteredComments = commentState.comments.filter((comm) => {
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
      .catch((err: RequestError) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    ...commentState,
    setCommentState,
    loading,
    createComment,
    removeComment,
    updateComment,
  };
}
