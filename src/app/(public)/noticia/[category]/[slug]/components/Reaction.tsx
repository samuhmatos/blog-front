"use client";
import {
  useCreatePostReaction,
  useGetPostReaction,
  useRemovePostReaction,
} from "@domain";
import { useAuth } from "@context";
import { Icon } from "@components";
import { ReactionType } from "@types";
import { useEffect, useState } from "react";

interface Props {
  postId: number;
}

export function Reaction({ postId }: Props) {
  const { user } = useAuth();

  const [reaction, setReaction] = useState<ReactionType | null>(null);

  // const { reaction, addReaction, deleteReaction } = useReaction(postId);
  const { mutate: loadReaction } = useGetPostReaction(setReaction);
  const { mutate: addReaction } = useCreatePostReaction(setReaction);
  const { mutate: deleteReaction } = useRemovePostReaction(setReaction);

  useEffect(() => {
    loadReaction(postId);
  }, [postId]);

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
            user && reaction === "LIKE"
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
            user && reaction === "UNLIKE"
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
