"use client";import { useEffect, useState } from "react";

import { useUserUpdate } from "@domain";
import {
  Modal,
  Icon,
  Button,
  FormTextAreaInput,
  FormTextInput,
  ChangePasswordModal,
} from "@components";
import { useAuth } from "@auth";

import { useProfileForm } from "./useProfileForm";
import { UserProfileSchema } from "./UserProfileSchema";
import { UserHeader } from "./components/UserHeader";
interface Props {
  open: boolean;
  onClose: () => void;
}

export function USerProfile({ open, onClose }: Props) {
  const { session } = useAuth();

  const { loading, mutate } = useUserUpdate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpenChangePassword = Boolean(anchorEl);

  const handleOpenChangePassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseChangePassword = () => {
    setAnchorEl(null);
  };

  const { control, formState, handleSubmit, setValue } = useProfileForm();

  useEffect(() => {
    if (session?.user) {
      setValue("name", session.user.name);
      setValue("email", session.user.email);
      setValue("username", session.user.username);
      session.user.description &&
        setValue("description", session.user.description);
    } else {
      handleCloseUserProfile();
    }
  }, [session]);

  function handleUpdateUser(params: UserProfileSchema) {
    var formData = new FormData();

    if (session!.user.email !== params.email) {
      formData.append("email", params.email);
    }

    if (session!.user.name !== params.name) {
      formData.append("name", params.name);
    }

    if (session!.user.description !== params?.description) {
      formData.append("description", params.description);
    }

    if (session!.user.username !== params.username) {
      formData.append("username", params.username);
    }

    if (session?.user.isAdmin) {
      formData.append("is_admin", "1");
    }

    mutate({ userId: session!.user.id, params: formData });
  }

  function handleCloseUserProfile() {
    onClose();
  }

  return (
    <>
      <Modal onClose={onClose} isOpen={open}>
        <UserHeader />
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 mt-2">
          Editar Perfil
        </h1>
        <div>
          <FormTextInput
            control={control}
            name="name"
            label="Nome"
            placeholder="Digite seu nome aqui..."
          />

          <FormTextInput
            control={control}
            name="username"
            label="Username"
            placeholder="Digite seu username aqui..."
          />

          <FormTextInput
            control={control}
            name="email"
            label="Email"
            placeholder="Digite seu email aqui..."
          />

          <FormTextAreaInput
            control={control}
            name="description"
            label="Biografia"
            placeholder="Digite sua biografia aqui..."
          />

          <Button
            placeholder="Mudar senha"
            className="mt-2"
            full
            paleteColor="secondary"
            endIcon={<Icon name="ArrowRightHalf" />}
            onClick={handleOpenChangePassword}
            disabled={loading}
          />

          <div className="flex gap-3 justify-end mt-3">
            <Button
              loading={loading}
              placeholder="Salvar"
              disabled={!formState.isValid}
              onClick={handleSubmit(handleUpdateUser)}
              full
            />
            <Button
              placeholder="Fechar"
              paleteColor="danger"
              onClick={handleCloseUserProfile}
            />
          </div>
        </div>
      </Modal>

      {session?.user && (
        <ChangePasswordModal
          anchor={anchorEl}
          isOpen={isOpenChangePassword}
          onClose={handleCloseChangePassword}
          userId={session.user.id}
          userIsAdmin={session.user.isAdmin}
        />
      )}
    </>
  );
}
