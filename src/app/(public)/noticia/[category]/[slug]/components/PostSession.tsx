import { PostWithDetails } from "@domain";
import { Post } from "./Post";
import { Author } from "./Author";
import { Suggestion } from "./Suggestion";
import { Comment } from "./Comment/Comment";
import { CommentProvider } from "@context";

interface Props {
  post: PostWithDetails;
}

export function PostSession({ post }: Props) {
  return (
    <div className="w-full lg:w-3/4">
      <Post post={post} />

      <Author author={post.author} />
      <Suggestion post={post} />

      <CommentProvider>
        <Comment comments={post.comments!} postId={post.id} />
      </CommentProvider>
    </div>
  );
}
