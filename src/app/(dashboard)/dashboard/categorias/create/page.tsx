"use client";
import { CategoryForm } from "../components";
import { usePostCategorySchema } from "../hooks/usePostCategorySchema";

export default function CreatePostPage() {
  const schema = usePostCategorySchema();

  return (
    <div>
      <CategoryForm schema={schema} />
    </div>
  );
}
