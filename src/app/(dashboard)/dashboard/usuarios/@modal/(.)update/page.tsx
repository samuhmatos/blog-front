"use client";import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { PageParams } from "@types";
import { useUserGetOne } from "@domain";
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

  const { user, isLoading } = useUserGetOne(id);

  function handleClose() {
    router.back();
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress size={30} />
      </div>
    );
  }

  return (
    <Modal isOpen onClose={handleClose}>
      <UserUpdateForm schema={schema} initialData={user} />
    </Modal>
  );
}
