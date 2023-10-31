"use client";
import { Metadata } from "next";
import { CategoryForm } from "../components";
import { usePostCategorySchema } from "@schema";

export const metadata: Metadata = {
  title: "Criar Categoria",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  const schema = usePostCategorySchema();

  return (
    <div>
      <CategoryForm schema={schema} />
    </div>
  );
}
