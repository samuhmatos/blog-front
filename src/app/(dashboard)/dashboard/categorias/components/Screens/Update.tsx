"use client";
import { useEffect } from "react";

import { useRouter } from "nextjs-progressloader";
import { usePostCategoryGet } from "@domain";
import { CircularProgress } from "@mui/material";

import { usePostCategoryForm } from "../../schema";
import { CategoryForm } from "..";
import { Modal } from "../../../components/@Modal/@Modal";

interface Props {
  categoryId: number;
  modal?: boolean;
}
export function Update({ categoryId, modal = false }: Props) {
  const router = useRouter();
  const schema = usePostCategoryForm();

  useEffect(() => {
    if (!categoryId) {
      router.back();
    }
  }, [categoryId]);

  const { category, isLoading } = usePostCategoryGet(categoryId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress size={30} />
      </div>
    );
  }

  if (modal) {
    return (
      <Modal>
        <CategoryForm schema={schema} initialData={category} editMode />
      </Modal>
    );
  }

  return (
    <div>
      <CategoryForm schema={schema} initialData={category} editMode />
    </div>
  );
}
