import { CommentButtonReply } from "./CommentButtonReply";
import { CommentHeader } from "./CommentHeader";

import { PostComment } from "@domain";
import { CommentReaction } from "./CommentReaction";

interface Props {
  comment: PostComment;
  first: boolean;
}

export function CommentBox({ comment, first }: Props) {
  return (
    <div
      className={`${
        !first && !comment.parentId && "border-t border-gray-200 "
      } ${
        comment.parentId && "ml-6 lg:ml-12 "
      } p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900 flex justify-center items-center gap-4`}
      id={`comment-${comment.id}`}
    >
      <CommentReaction
        commentId={comment.id}
        like={comment.likeCount}
        unLike={comment.unLikeCount}
        postId={comment.postId}
        userReaction={comment.userReaction}
      />
      <div className="flex-1">
        <CommentHeader
          user={comment.user}
          date={comment.updatedAtFormatted}
          commentId={comment.id}
          comment={comment}
        />
        <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
        <CommentButtonReply comment={comment} />
      </div>
    </div>
  );
}
