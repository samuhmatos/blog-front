"use client";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { useEffect } from "react";

import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { Modal } from "@components";

import { CategoryForm } from "../../components";
import { usePostCategoryForm } from "../../schema";

export const metadata: Metadata = {
  title: "Atualizar Categoria",
  robots: {
    index: false,
  },
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  const router = useRouter();
  const schema = usePostCategoryForm();

  useEffect(() => {
    if (!categoryId) {
      handleClose();
    }
  }, []);

  const { category } = usePostCategoryGet(categoryId);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose} className="max-w-3xl">
      <CategoryForm schema={schema} initialData={category} editMode />
    </Modal>
  );
}
