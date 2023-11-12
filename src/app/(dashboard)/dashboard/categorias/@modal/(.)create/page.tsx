"use client";
import { useRouter } from "next/navigation";
import { Modal } from "@components";
import { CategoryForm } from "../../components";
import { Metadata } from "next";
import { usePostCategoryForm } from "../../schema";

export const metadata: Metadata = {
  title: "Criar Categoria",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const schema = usePostCategoryForm();

  return (
    <Modal isOpen onClose={handleClose} className="w-1/2 max-w-3xl">
      <CategoryForm schema={schema} />
    </Modal>
  );
}
