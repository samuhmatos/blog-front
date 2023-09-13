"use client";
import { FormEvent, useState, useRef, useEffect } from "react";
import { UsePostCommentProps, usePostComment } from "@domain";
import { LoadButton, TextAreaInput } from "@components";

interface Props {
  postId: number;
}

export function CommentForm({ postId }: Props) {
  const [text, setText] = useState<string>("");
  const commentRef = useRef<HTMLDivElement | null>(null);

  const { comment, loading, replyTo, action, setCommentState, createUpdate } =
    usePostComment();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    commentRef.current?.classList.remove("border-red-700");
    commentRef.current?.classList.add("border-gray-200");

    if (!text.length) {
      commentRef.current?.classList.remove("border-gray-200");
      commentRef.current?.classList.add("border-red-700");
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
    var textArea = commentRef.current!.querySelector("textarea");
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
    <form className="mb-6" onSubmit={handleSubmit}>
      <TextAreaInput
        id="comment"
        placeholder="Deixe um comentário"
        value={text}
        setValue={setText}
        name="comment"
        ref={commentRef}
      />
      <LoadButton
        loading={loading}
        placeholder={renderSuccessButtonText()}
        disabled={!!!text}
      />
      {(replyTo || action === "edit") && (
        <button
          onClick={handleCancelAction}
          className="py-2.5 px-4 text-xs font-medium text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-red-800 ml-4 uppercase"
        >
          {renderCancelButtonText()}
        </button>
      )}
    </form>
  );
}
