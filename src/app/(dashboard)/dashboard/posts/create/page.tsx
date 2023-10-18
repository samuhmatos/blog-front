"use client";import { Metadata } from "next";
import { PostForm } from "../components";
import { usePostSchema } from "../hooks/usePostSchema";
import { CreatePostButton } from "./components/CreatePostButton";

export const metadata: Metadata = {
  title: "Criar Postagem",
  robots: {
    index: false,
  },
};

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
