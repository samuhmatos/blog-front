"use client";
import { useState } from "react";
import { useCreatePostReaction, useRemovePostReaction } from "@domain";
import { Icon } from "@components";
import { ReactionType } from "@types";
import { useAuth } from "@auth";

interface Props {
  postId: number;
  userReaction: ReactionType | null;
}

export function Reaction({ postId, userReaction }: Props) {
  const { session } = useAuth();

  const [reaction, setReaction] = useState<ReactionType | null>(userReaction);

  const { mutate: addReaction } = useCreatePostReaction(setReaction);
  const { mutate: deleteReaction } = useRemovePostReaction(setReaction);

  function handleReaction(e: ReactionType) {
    if (e !== reaction) {
      return addReaction({
        postId,
        type: e,
      });
    } else {
      return deleteReaction(postId);
    }
  }

  return (
    <div className="mt-5">
      <div className="flex justify-center gap-3 text-white text-2xl">
        <button
          className={`${
            session?.user && reaction === "LIKE"
              ? "bg-sky-700 hover:bg-sky-800"
              : "bg-sky-500 hover:bg-sky-600"
          } rounded-full p-3 transition-all`}
          onClick={() => handleReaction("LIKE")}
        >
          {reaction === "LIKE" ? (
            <Icon name="LikeSolid" />
          ) : (
            <Icon name="Like" />
          )}
        </button>
        <button
          className={`${
            session?.user && reaction === "UNLIKE"
              ? "bg-sky-700 hover:bg-sky-800"
              : "bg-sky-500 hover:bg-sky-700"
          } rounded-full p-3 transition-all`}
          onClick={() => handleReaction("UNLIKE")}
        >
          {reaction === "UNLIKE" ? (
            <Icon name="DislikeSolid" />
          ) : (
            <Icon name="Dislike" />
          )}
        </button>
      </div>
    </div>
  );
}
