"use client";
import { PostForm } from "../components";
import { usePostSchema } from "../hooks/usePostSchema";
import { UpdatePostButton } from "./components/UpdatePostButton";
import { useEffect } from "react";
import { useGetPost } from "@domain";
import { PageParams } from "@types";

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  const { post, getOne } = useGetPost();

  const schema = usePostSchema({ editMode: true });

  useEffect(() => {
    if (postId) {
      getOne(postId.toString());
    }
  }, []);

  return (
    <div>
      <PostForm
        ActionsButton={
          <UpdatePostButton
            schema={schema}
            postId={postId}
            isDraft={post?.isDraft || false}
          />
        }
        schema={schema}
        initialData={post}
      />
    </div>
  );
}
