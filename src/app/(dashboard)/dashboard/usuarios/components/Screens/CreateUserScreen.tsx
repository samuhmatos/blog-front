"use client";
import { useRouter } from "nextjs-progressloader";
import { useUserCreateForm } from "../../schema";
import { Modal } from "../../../components/@Modal/@Modal";
import { UserCreateForm } from "../UserForm/components/UserCreateForm";

interface Props {
  modal?: boolean;
}
export function CreateUserScreen({ modal }: Props) {
  const router = useRouter();
  const schema = useUserCreateForm();

  function handleClose() {
    router.back();
  }

  if (modal) {
    return (
      <Modal>
        <UserCreateForm schema={schema} />
      </Modal>
    );
  }

  return <UserCreateForm schema={schema} />;
}
