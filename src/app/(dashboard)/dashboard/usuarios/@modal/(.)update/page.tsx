"use client";import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { PageParams } from "@types";
import { useUserSchema } from "@hooks";
import { useUserGet } from "@domain";
import { useEffect } from "react";
import { UserForm } from "../../components/UserForm/UserForm";

export default function CreateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();

  const schema = useUserSchema();

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
      <UserForm schema={schema} initialData={user} />
    </Modal>
  );
}
