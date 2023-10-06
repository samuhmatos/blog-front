"use client";
import { useState, useEffect } from "react";
import { UsePostCommentProps, usePostComment } from "@domain";
import { Button, TextAreaInput } from "@components";

interface Props {
  postId: number;
}

export function CommentForm({ postId }: Props) {
  const [text, setText] = useState<string>("");

  const { comment, loading, replyTo, action, setCommentState, createUpdate } =
    usePostComment();

  function handleSubmit() {
    var textArea = document.querySelector("#comment-field") as HTMLDivElement;

    textArea.classList.remove("border-red-700");
    textArea.classList.add("border-gray-200");

    if (!text.length) {
      textArea.classList.remove("border-gray-200");
      textArea.classList.add("border-red-700");
      return;
    }

    var params: UsePostCommentProps["params"] = {
      comment: text,
      postId,
      parentId: replyTo || undefined,
    };

    if (action === "edit") params.commentId = comment!.id;

    createUpdate({
      type: action,
      callBack() {
        setText("");
      },
      params,
    });
  }

  function handleCancelAction() {
    setCommentState((prev) => ({
      ...prev,
      replyTo: null,
      comment: null,
      action: "create",
    }));
  }

  function renderSuccessButtonText(): string {
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

    window.scrollTo({ top: offSetTop - 100 });
    textArea!.focus();
  }

  useEffect(() => {
    if (replyTo || action == "edit") {
      setText(comment?.comment || "");
      scrollToForm();
    }
  }, [replyTo, action]);

  return (
    <div className="mb-6">
      <TextAreaInput
        placeholder="Deixe um comentário"
        value={text}
        setValue={setText}
        name="comment"
      />
      <div className="flex gap-3 mt-3">
        <Button
          loading={loading}
          placeholder={renderSuccessButtonText()}
          disabled={!!!text}
          onClick={handleSubmit}
        />
        {(replyTo || action === "edit") && (
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

//TODO: ADD HOOK FORM + ZOD
