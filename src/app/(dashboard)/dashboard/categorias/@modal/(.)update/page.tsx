"use client";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { useEffect } from "react";

import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { Modal } from "@components";

import { CategoryForm } from "../../components";
import { usePostCategoryForm } from "../../schema";
import { CircularProgress } from "@mui/material";

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

  const { category, isLoading } = usePostCategoryGet(categoryId);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose} className="max-w-3xl">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={30} />
        </div>
      ) : (
        <CategoryForm schema={schema} initialData={category} editMode />
      )}
    </Modal>
  );
}
