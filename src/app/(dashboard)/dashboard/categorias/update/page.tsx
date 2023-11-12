"use client";import { useEffect } from "react";
import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { usePostCategoryForm } from "./../schema";
import { CategoryForm } from "../components";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export const metadata: Metadata = {
  title: "Atualizar Categorias",
  robots: {
    index: false,
  },
};

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  const router = useRouter();

  const schema = usePostCategoryForm();

  useEffect(() => {
    if (!categoryId) {
      router.back();
    }
  }, []);

  const { category, isLoading } = usePostCategoryGet(categoryId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <CircularProgress size={30} />
      </div>
    );
  }

  return (
    <div>
      <CategoryForm schema={schema} initialData={category} editMode />
    </div>
  );
}
