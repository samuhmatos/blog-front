"use client";
import { Metadata } from "next";
import { useCreatePostForm } from "../schemas";
import { useGetCategories } from "../hooks/useGetCategories";
import { CreatePostForm } from "../components/Post/CreatePostForm";

export const metadata: Metadata = {
  title: "Criar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  const { categories, categoryData } = useGetCategories();

  const schema = useCreatePostForm(categories);

  return (
    <div>
      <CreatePostForm schema={schema} categories={categoryData} />
    </div>
  );
}
