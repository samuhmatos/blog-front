"use client";
import { Modal } from "@components";
import { useRouter } from "next/navigation";
// import { useUserCreateSchema } from "@schema";
import { UserCreateForm } from "../../components/UserForm/components/UserCreateForm";
import { useUserCreateForm } from "../../schema";

export default function CreateUserPage() {
  const router = useRouter();
  const schema = useUserCreateForm();

  function handleClose() {
    router.back();
  }

  return (
    <Modal isOpen onClose={handleClose}>
      <UserCreateForm schema={schema} />
    </Modal>
  );
}
