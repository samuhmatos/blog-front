"use client";
import { useEffect } from "react";
import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { usePostCategoryForm } from "./../schema";
import { CategoryForm } from "../components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atualizar Categorias",
  robots: {
    index: false,
  },
};

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  const { category, getOne } = usePostCategoryGet();
  const schema = usePostCategoryForm();

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
