"use client";import { useEffect } from "react";
import {
  PostCommentParams,
  usePostCommentCreate,
  usePostCommentUpdate,
} from "@domain";
import { Button, FormTextAreaInput } from "@components";
import { useComment } from "@context";

import { useCommentForm } from "./useCommentForm";
import { CommentSchema } from "./commentSchema";

interface Props {
  postId: number;
}

export function CommentForm({ postId }: Props) {
  const { control, handleSubmit, formState, reset, setValue } =
    useCommentForm();

  const { comment, replyTo, action, setCommentState } = useComment();
  const { mutate: updateComment, loading: loadingUpdate } =
    usePostCommentUpdate();
  const { mutate: createComment, loading: loadingCreate } =
    usePostCommentCreate();

  function submitComment({ message }: CommentSchema) {
    var params: PostCommentParams = {
      comment: message,
      postId,
      parentId: replyTo || undefined,
    };

    if (action === "update") {
      params.commentId = comment!.id;

      updateComment(params, () => {
        reset();
      });
    } else {
      createComment(params, () => {
        reset();
      });
    }
  }

  function handleCancelAction() {
    setCommentState((prev) => ({
      ...prev,
      replyTo: null,
      comment: null,
      action: "create",
    }));
  }

  function renderSendButtonText(): string {
    if (action === "create") {
      return replyTo ? "Responder comentário" : "Enviar comentário";
    } else {
      return "Editar comentário";
    }
  }

  function renderCancelButtonText(): string {
    if (action === "create") {
      return "Cancelar Resposta";
    } else {
      return "Cancelar edição";
    }
  }

  useEffect(() => {
    if (action == "update") {
      setValue("message", comment!.comment);
    }
  }, [replyTo, action]);

  return (
    <div className="mb-6">
      <FormTextAreaInput
        control={control}
        name="message"
        placeholder="Deixe um comentário"
      />
      <div className="flex gap-3 mt-3">
        <Button
          loading={action === "create" ? loadingCreate : loadingUpdate}
          placeholder={renderSendButtonText()}
          disabled={!formState.isValid}
          onClick={handleSubmit(submitComment)}
        />
        {(replyTo || action === "update") && (
          <Button
            paleteColor="danger"
            placeholder={renderCancelButtonText()}
            onClick={handleCancelAction}
          />
        )}
      </div>
    </div>
  );
}
