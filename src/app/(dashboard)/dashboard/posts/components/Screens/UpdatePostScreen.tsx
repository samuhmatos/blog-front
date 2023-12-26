"use client";
import { CircularProgress } from "@mui/material";
import { Modal } from "../../../components/@Modal/@Modal";
import { UpdatePostForm } from "../Post/UpdatePostForm";
import { useGetPost } from "@domain";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useUpdatePostForm } from "../../schemas";

interface Props {
  modal?: boolean;
  postId: number;
}

export function UpdatePostScreen({ modal = false, postId }: Props) {
  const { post, isLoading } = useGetPost(postId.toString());
  const { categories, categoriesOptions } = useGetCategories();
  const schema = useUpdatePostForm(categoriesOptions);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress size={30} />
      </div>
    );
  }

  if (modal) {
    return (
      <Modal className="max-w-5xl">
        <UpdatePostForm
          categories={categories!}
          initialData={post}
          schema={schema}
        />
      </Modal>
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
