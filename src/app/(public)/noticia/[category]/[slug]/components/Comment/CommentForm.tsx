"use client";
import { useEffect } from "react";
import { PostCommentParams } from "@domain";
import { Button, FormTextAreaInput } from "@components";
import { useComment, useCommentService } from "@context";

import { useCommentForm } from "./useCommentForm";
import { CommentSchema } from "./commentSchema";

interface Props {
  postId: number;
}

export function CommentForm({ postId }: Props) {
  const { control, handleSubmit, formState, reset, setValue } =
    useCommentForm();

  const { comment, replyTo, loading, action } = useComment();
  const { createComment, updateComment, setCommentState } = useCommentService();

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

  function scrollToForm() {
    var textArea = document.querySelector(
      "#commentSection textarea"
    ) as HTMLTextAreaElement;
    var offSetTop = textArea!.offsetTop;

    window.scrollTo({ top: offSetTop - 200 });
    textArea!.focus();
  }

  useEffect(() => {
    if (action == "update") {
      setValue("message", comment!.comment);
    }

    scrollToForm();
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
          loading={loading}
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
