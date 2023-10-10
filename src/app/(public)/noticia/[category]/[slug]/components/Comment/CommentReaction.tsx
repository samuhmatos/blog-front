"use client";
import { usePostCommentReaction } from "@domain";
import { Icon } from "@components";
import { ReactionType } from "@types";

interface Props {
  commentId: number;
  postId: number;
  like: number;
  unLike: number;
}
export function CommentReaction({ commentId, like, postId, unLike }: Props) {
  const {
    createReaction,
    loading,
    reactionType,
    likeCount,
    unLikeCount,
    deleteReaction,
  } = usePostCommentReaction({
    like,
    unLike,
  });

  const diff = likeCount - unLikeCount;

  async function handleReaction(e: ReactionType) {
    if (e !== reactionType) {
      createReaction({
        commentId,
        type: e,
      });
    } else {
      deleteReaction(commentId);
    }
  }

  return (
    <div className="px-3 py-2 bg-primary-900 flex flex-col gap-2 rounded">
      <button
        className={`${
          reactionType === "LIKE" ? "text-white" : "text-gray-500"
        } text-base`}
        onClick={() => handleReaction("LIKE")}
      >
        <Icon name="Plus" size="text-base" />
      </button>

      <span className="text-base font-bod text-gray-200 text-center">
        {diff}
      </span>

      <button
        className={`${
          reactionType === "UNLIKE" ? "text-white" : "text-gray-500"
        } text-base `}
        onClick={() => handleReaction("UNLIKE")}
      >
        <Icon name="Minus" size="text-base" />
      </button>
    </div>
  );
}
