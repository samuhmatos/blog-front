"use client";import { useEffect, useState } from "react";

import {
  usePostCommentReactionCreate,
  usePostCommentReactionDelete,
  usePostCommentReactionGet,
} from "@domain";
import { Icon } from "@components";
import { ReactionType } from "@types";

interface Props {
  commentId: number;
  postId: number;
  like: number;
  unLike: number;
}
export function CommentReaction({ commentId, like, postId, unLike }: Props) {
  const [reaction, setReaction] = useState<ReactionType | null>(null);
  const [reactionCount, setReactionCount] = useState<number>(like - unLike);

  const { reaction: reactionReq } = usePostCommentReactionGet(commentId);
  const { mutate: create } = usePostCommentReactionCreate({
    setReaction,
    setReactionCount,
  });
  const { mutate: remove } = usePostCommentReactionDelete({
    reaction,
    setReaction,
    setReactionCount,
  });

  useEffect(() => {
    if (reactionReq) {
      setReaction(reactionReq.type);
    }
  }, [reactionReq]);

  async function handleReaction(e: ReactionType) {
    if (e !== reaction) {
      create({
        commentId,
        type: e,
      });
    } else {
      remove(commentId);
    }
  }

  return (
    <div className="px-3 py-2 bg-primary-900 flex flex-col gap-2 rounded">
      <button
        className={`${
          reaction === "LIKE" ? "text-white" : "text-gray-500"
        } text-base`}
        onClick={() => handleReaction("LIKE")}
      >
        <Icon name="Plus" size="text-base" />
      </button>

      <span className="text-base font-bod text-gray-200 text-center">
        {reactionCount}
      </span>

      <button
        className={`${
          reaction === "UNLIKE" ? "text-white" : "text-gray-500"
        } text-base `}
        onClick={() => handleReaction("UNLIKE")}
      >
        <Icon name="Minus" size="text-base" />
      </button>
    </div>
  );
}
