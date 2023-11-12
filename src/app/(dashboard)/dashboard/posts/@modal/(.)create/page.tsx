"use client";import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { Modal } from "@components";

import { useGetCategories } from "../../hooks/useGetCategories";
import { useCreatePostForm } from "../../schemas";
import { CreatePostForm } from "../../components/Post/CreatePostForm";

export const metadata: Metadata = {
  title: "Criar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  const router = useRouter();
  const { categoriesOptions, categories } = useGetCategories();

  const handleClose = () => {
    router.back();
  };

  const schema = useCreatePostForm(categoriesOptions);

  return (
    <Modal isOpen onClose={handleClose} className="w-[90vw] max-w-7xl">
      <CreatePostForm schema={schema} categories={categories!} />
    </Modal>
  );
}
