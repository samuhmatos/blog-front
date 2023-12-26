"use client";
import { CategoryForm } from "..";
import { usePostCategoryForm } from "../../schema";
import { Modal } from "./../../../components/@Modal/@Modal";

interface Props {
  modal?: boolean;
}
export function Create({ modal = false }: Props) {
  const schema = usePostCategoryForm();

  if (modal) {
    return (
      <Modal>
        <CategoryForm schema={schema} />
      </Modal>
    );
  }

  return (
    <div>
      <CategoryForm schema={schema} />
    </div>
  );
}
