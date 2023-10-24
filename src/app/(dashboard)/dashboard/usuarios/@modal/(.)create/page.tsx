"use client";
import { Modal } from "@components";
import { useRouter } from "next/navigation";
import { UserForm } from "../../components/UserForm/UserForm";
import { useUserSchema } from "@hooks";

export default function CreateUserPage() {
  const router = useRouter();
  const schema = useUserSchema(true);

  function handleClose() {
    router.back();
  }

  return (
    <Modal isOpen onClose={handleClose} className="min-h-[90%]">
      <UserForm schema={schema} />
    </Modal>
  );
}
