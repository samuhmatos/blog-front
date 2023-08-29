"use client";
import { MouseEvent, useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

interface Props {
  type?: "like" | "unlike";
  postId: number;
}

export function Reaction({ type, postId }: Props) {
  const [reactionType, setReactionType] = useState<"like" | "unlike" | null>();

  function handleReaction(e: typeof reactionType) {
    if (e === reactionType) return setReactionType(null);
    else return setReactionType(e);
  }

  return (
    <div className="flex justify-center mt-5 gap-3 text-white text-2xl">
      <button
        className="rounded-full p-3 bg-sky-500"
        onClick={() => handleReaction("like")}
      >
        {reactionType === "like" ? <BiSolidLike /> : <BiLike />}
      </button>
      <button
        className="rounded-full p-3 bg-sky-500"
        onClick={() => handleReaction("unlike")}
      >
        {reactionType === "unlike" ? <BiSolidDislike /> : <BiDislike />}
      </button>
    </div>
  );
}
