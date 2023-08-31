"use client";import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { ReactionType, useAuth, useReaction } from "@domain";

interface Props {
  postId: number;
}

export function Reaction({ postId }: Props) {
  const { reaction, addReaction, deleteReaction } = useReaction(postId);
  const { user } = useAuth();

  function handleReaction(e: ReactionType) {
    if (e !== reaction) {
      return addReaction(e);
    } else {
      return deleteReaction(postId);
    }
  }

  return (
    <div className="mt-5">
      <div className="flex justify-center gap-3 text-white text-2xl">
        <button
          className={`${
            user && reaction === "LIKE"
              ? "bg-sky-700 hover:bg-sky-800"
              : "bg-sky-500 hover:bg-sky-600"
          } rounded-full p-3 transition-all`}
          onClick={() => handleReaction("LIKE")}
        >
          {reaction === "LIKE" ? <BiSolidLike /> : <BiLike />}
        </button>
        <button
          className={`${
            user && reaction === "UNLIKE"
              ? "bg-sky-700 hover:bg-sky-800"
              : "bg-sky-500 hover:bg-sky-700"
          } rounded-full p-3 transition-all`}
          onClick={() => handleReaction("UNLIKE")}
        >
          {reaction === "UNLIKE" ? <BiSolidDislike /> : <BiDislike />}
        </button>
      </div>
    </div>
  );
}
