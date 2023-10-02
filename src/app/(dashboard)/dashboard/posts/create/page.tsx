"use client";
import { PostForm } from "../components";
import { usePostSchema } from "../hooks/usePostSchema";
import { CreatePostButton } from "./components/CreatePostButton";
export default function CreatePostPage() {
  const schema = usePostSchema({});

  return (
    <div>
      <PostForm
        ActionsButton={<CreatePostButton schema={schema} />}
        schema={schema}
      />
    </div>
  );
}
