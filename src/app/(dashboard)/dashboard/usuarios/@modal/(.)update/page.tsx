"use client";import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { PageParams } from "@types";
import { useUserUpdateSchema } from "@schema";
import { useUserGet } from "@domain";
import { useEffect } from "react";
import { UserUpdateForm } from "../../components/UserForm/components/UserUpdateForm";

export default function CreateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();

  const schema = useUserUpdateSchema();

  const { user, loading, show } = useUserGet();

  useEffect(() => {
    if (id) {
      show(id);
    } else {
      handleClose();
    }
  }, [id]);

  function handleClose() {
    router.back();
  }

  return (
    <Modal isOpen onClose={handleClose}>
      <UserUpdateForm schema={schema} initialData={user} />
    </Modal>
  );
}
