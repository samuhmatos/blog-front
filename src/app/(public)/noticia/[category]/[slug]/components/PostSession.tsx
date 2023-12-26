import { notFound } from "next/navigation";import { PostWithDetails, postService } from "@domain";
import { CommentProvider } from "@context";

import { Post } from "./Post";
import { Author } from "./Author";
import { Comment } from "./Comment/Comment";

export async function getPost(postSlug: string): Promise<PostWithDetails> {
  try {
    return await postService.getOne(postSlug);
  } catch (err: any) {
    notFound();
  }
}

interface Props {
  postSlug: string;
}

export async function PostSession({ postSlug }: Props) {
  const post = await getPost(postSlug);

  return (
    <div className="w-full lg:w-3/4">
      <Post post={post} />

      <Author author={post.author} />

      <CommentProvider>
        <Comment comments={post.comments!} postId={post.id} />
      </CommentProvider>
    </div>
  );
}
