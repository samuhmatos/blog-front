"use client";
import { Metadata } from "next";
import { useGetPost } from "@domain";
import { PageParams } from "@types";

import { useGetCategories } from "../hooks/useGetCategories";
import { useUpdatePostForm } from "../schemas";
import { UpdatePostForm } from "../components/Post/UpdatePostForm";
import { CircularProgress } from "@mui/material";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
  robots: {
    index: false,
  },
};

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  const { post, isLoading } = useGetPost(postId.toString());
  const { categories, categoriesOptions } = useGetCategories();
  const schema = useUpdatePostForm(categoriesOptions);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <CircularProgress size={30} />
      </div>
    );
  }

  return (
    <div>
      <UpdatePostForm
        categories={categories!}
        initialData={post}
        schema={schema}
      />
    </div>
  );
}
