"use client";import { useGetCategories } from "../../hooks/useGetCategories";
import { useCreatePostForm } from "../../schemas";
import { Modal } from "../../../components/@Modal/@Modal";
import { CreatePostForm } from "../Post/CreatePostForm";

interface Props {
  modal?: Boolean;
}
export function CreatePostScreen({ modal = false }: Props) {
  const { categoriesOptions, categories } = useGetCategories();

  const schema = useCreatePostForm(categoriesOptions);

  if (modal) {
    return (
      <Modal className="w-[90vw] max-w-7xl">
        <CreatePostForm schema={schema} categories={categories!} />
      </Modal>
    );
  }

  return (
    <div>
      <CreatePostForm schema={schema} categories={categories!} />
    </div>
  );
}
