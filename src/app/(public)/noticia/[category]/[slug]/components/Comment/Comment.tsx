"use client";
import { useState, useEffect } from "react";

import { PostComment } from "@domain";
import { useComment } from "@context";

import { CommentBox } from "./CommentBox";
import { CommentForm } from "./CommentForm";

interface Props {
  comments: PostComment[];
  postId: number;
}

export function Comment({ comments: initialData, postId }: Props) {
  const [total, setTotal] = useState<number>(0);

  const { comments, setCommentState } = useComment();

  useEffect(() => {
    setCommentState((prev) => ({
      ...prev,
      comments: initialData,
    }));
  }, []);

  useEffect(() => {
    let count = comments.length;
    comments.forEach((comment) => (count += comment.answers?.length || 0));

    setTotal(count);
  }, [comments]);

  return (
    <section
      className="bg-white dark:bg-gray-900 py-8 lg:py-16"
      id="commentSection"
    >
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            {comments
              ? `Comentário${total !== 0 ? "s" : ""} (${total})`
              : "Comentário"}
          </h2>
        </div>

        <CommentForm postId={postId} />

        {comments.map((comment, index) => {
          return (
            <>
              <CommentBox
                key={comment.id}
                comment={comment}
                first={index === 0}
              />
              {comment.answers?.map((answer) => (
                <CommentBox key={answer.id} comment={answer} first={false} />
              ))}
            </>
          );
        })}
      </div>
    </section>
  );
}
