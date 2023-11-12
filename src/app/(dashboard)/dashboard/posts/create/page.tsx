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
  const { categories, categoriesOptions } = useGetCategories();

  const schema = useCreatePostForm(categoriesOptions);

  return (
    <div>
      <CreatePostForm schema={schema} categories={categories!} />
    </div>
  );
}
