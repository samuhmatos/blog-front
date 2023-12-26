"use client";
import { useEffect } from "react";

import { useRouter } from "nextjs-progressloader";
import { CircularProgress } from "@mui/material";
import { useUserGetOne } from "@domain";

import { useUserUpdateForm } from "../../schema";
import { UserUpdateForm } from "../UserForm/components/UserUpdateForm";
import { Modal } from "../../../components/@Modal/@Modal";

interface Props {
  modal?: boolean;
  userId: number;
}

export function UpdateUserScreen({ modal, userId }: Props) {
  const router = useRouter();
  const schema = useUserUpdateForm();

  useEffect(() => {
    if (!userId) {
      handleClose();
    }
  }, [userId]);

  const { user, isLoading } = useUserGetOne(userId);

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

  if (modal) {
    return (
      <Modal>
        <UserUpdateForm schema={schema} initialData={user} />
      </Modal>
    );
  }

  return <UserUpdateForm schema={schema} initialData={user} />;
}
