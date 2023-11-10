"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useGetPost } from "@domain";
import { PageParams } from "@types";
import { Modal } from "@components";

import { useGetCategories } from "../../hooks/useGetCategories";
import { useUpdatePostForm } from "../../schemas";
import { UpdatePostForm } from "../../components/Post/UpdatePostForm";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const router = useRouter();

  const postId = props.searchParams.id;
  const { post } = useGetPost(postId.toString());
  const { categories, categoryData } = useGetCategories();
  const schema = useUpdatePostForm(categories);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose} className="max-w-5xl">
      <UpdatePostForm
        categories={categoryData}
        initialData={post}
        schema={schema}
      />
    </Modal>
  );
}
