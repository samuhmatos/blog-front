"use client";
import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { PageParams } from "@types";
import { useUserGet } from "@domain";
import { useEffect } from "react";
import { UserUpdateForm } from "../../components/UserForm/components/UserUpdateForm";
import { useUserUpdateForm } from "../../schema";
import { CircularProgress } from "@mui/material";

export default function CreateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();
  const schema = useUserUpdateForm();

  useEffect(() => {
    if (!id) {
      handleClose();
    }
  }, [id]);

  const { user, isLoading } = useUserGet(id);

  function handleClose() {
    router.back();
  }

  return (
    <Modal isOpen onClose={handleClose}>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress size={30} />
        </div>
      ) : (
        <UserUpdateForm schema={schema} initialData={user} />
      )}
    </Modal>
  );
}
