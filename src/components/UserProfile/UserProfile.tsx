"use client";import { useEffect, useState } from "react";
import { useUserUpdate } from "@domain";
import { UserProfileSchema, userProfileSchema } from "./UserProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserHeader } from "./components/UserHeader";

import {
  Modal,
  Icon,
  Button,
  FormTextAreaInput,
  FormTextInput,
  ChangePasswordModal,
} from "@components";
import { useAuth } from "@context";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function USerProfile({ open, onClose }: Props) {
  const { user } = useAuth();
  const { loading, update } = useUserUpdate();

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

  const { control, formState, handleSubmit, reset, setValue } =
    useForm<UserProfileSchema>({
      resolver: zodResolver(userProfileSchema),
      mode: "onChange",
    });

  useEffect(() => {
    if (user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("username", user.username);
      user.description && setValue("description", user.description);
    }
  }, [user]);

  function handleUpdateUser(data: UserProfileSchema) {
    var formData = new FormData();

    user!.email !== data.email && formData.append("email", data.email);
    user!.name !== data.name && formData.append("name", data.name);
    user?.description !== data?.description &&
      formData.append("description", data.description);
    user!.username !== data.username &&
      formData.append("username", data.username);

    update(user!.id, formData);
  }

  function handleClose() {
    onClose();
    reset();
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
              onClick={handleClose}
            />
          </div>
        </div>
      </Modal>

      {user && (
        <ChangePasswordModal
          anchor={anchorEl}
          isOpen={isOpenChangePassword}
          onClose={handleCloseChangePassword}
          userId={user?.id}
        />
      )}
    </>
  );
}
