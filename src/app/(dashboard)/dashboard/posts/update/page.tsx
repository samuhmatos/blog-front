"use client";import { Metadata } from "next";
import { useGetPost } from "@domain";
import { PageParams } from "@types";

import { useGetCategories } from "../hooks/useGetCategories";
import { useUpdatePostForm } from "../schemas";
import { UpdatePostForm } from "../components/Post/UpdatePostForm";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
  robots: {
    index: false,
  },
};

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  const { post } = useGetPost(postId.toString());
  const { categories, categoryData } = useGetCategories();
  const schema = useUpdatePostForm(categories);

  return (
    <div>
      <UpdatePostForm
        categories={categoryData}
        initialData={post}
        schema={schema}
      />
    </div>
  );
}
