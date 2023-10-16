"use client";
import { useEffect } from "react";
import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { usePostCategorySchema } from "../hooks/usePostCategorySchema";
import { CategoryForm } from "../components";

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  const { category, getOne } = usePostCategoryGet();
  const schema = usePostCategorySchema();

  useEffect(() => {
    if (categoryId) {
      getOne(categoryId);
    }
  }, []);

  return (
    <div>
      <CategoryForm schema={schema} initialData={category} editMode />
    </div>
  );
}
