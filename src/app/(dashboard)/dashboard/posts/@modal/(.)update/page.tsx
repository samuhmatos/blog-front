"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useGetPost } from "@domain";
import { PageParams } from "@types";
import { Modal } from "@components";

import { useGetCategories } from "../../hooks/useGetCategories";
import { useUpdatePostForm } from "../../schemas";
import { UpdatePostForm } from "../../components/Post/UpdatePostForm";
import { CircularProgress } from "@mui/material";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  const router = useRouter();

  const { post, isLoading } = useGetPost(postId.toString());
  const { categories, categoriesOptions } = useGetCategories();
  const schema = useUpdatePostForm(categoriesOptions);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal isOpen onClose={handleClose} className="max-w-5xl">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={30} />
        </div>
      ) : (
        <UpdatePostForm
          categories={categories!}
          initialData={post}
          schema={schema}
        />
      )}
    </Modal>
  );
}
