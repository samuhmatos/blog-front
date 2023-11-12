"use client";
import { PostComment } from "@domain";
import { useComment } from "@context";

interface Props {
  comment: PostComment;
}

export function CommentButtonReply({ comment }: Props) {
  const { setCommentState, scrollToForm } = useComment();

  function handleClick() {
    var replyTo: number;

    if (comment.parentId) {
      replyTo = comment.parentId;
    } else {
      replyTo = comment.id;
    }

    setCommentState((prev) => ({
      ...prev,
      replyTo,
    }));

    scrollToForm();
  }

  return (
    <div className="flex items-center mt-4 space-x-4">
      <button
        type="button"
        className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
        onClick={handleClick}
      >
        <svg
          aria-hidden="true"
          className="mr-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
        Responder
      </button>
    </div>
  );
}
