import Image from "next/image";import { CommentOptions } from "./CommentOptions";
import { PostComment } from "@domain";

interface Props {
  commentId: number;
  date: string;
  user: PostComment["user"];
  comment: PostComment;
}

export function CommentHeader({ user, commentId, date, comment }: Props) {
  return (
    <header className="flex justify-between items-center mb-2">
      <div className="flex items-center">
        <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <img
            width="300"
            height="300"
            className="mr-2 w-6 h-6 rounded-full"
            src={user.imageURL || "/assets/user.png"}
            alt={user.name}
          />{" "}
          {user.name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <time dateTime="2022-02-08" title="February 8th, 2022">
            {date}
          </time>
        </p>
      </div>
      <CommentOptions
        commentId={commentId}
        userId={user.id}
        comment={comment}
        postId={comment.postId}
      />
    </header>
  );
}
