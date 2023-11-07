"use client";
import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { PageParams } from "@types";
import { useUserGet } from "@domain";
import { useEffect } from "react";
import { UserUpdateForm } from "../../components/UserForm/components/UserUpdateForm";
import { useUserUpdateForm } from "../../schema";

export default function CreateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();
  const schema = useUserUpdateForm();

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
