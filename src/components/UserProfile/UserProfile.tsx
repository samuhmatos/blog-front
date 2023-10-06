"use client";
import { Modal } from "@mui/material";
import { UserHeader } from "./components/UserHeader";
import { useAuth, useUserUpdate } from "@domain";
import { UserProfileSchema, userProfileSchema } from "./UserProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormTextInput } from "../FormTextInput/FormTextInput";
import { FormTextAreaInput } from "../FormTextAreaInput/FormTextAreaInput";
import { Button } from "../Button/Button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function USerProfile({ open, onClose }: Props) {
  const { user } = useAuth();
  const { loading, update } = useUserUpdate();

  const { control, formState, handleSubmit, reset } =
    useForm<UserProfileSchema>({
      resolver: zodResolver(userProfileSchema),
      defaultValues: {
        email: user?.email,
        name: user?.name,
        description: user?.description || "",
        username: user?.username,
      },
      mode: "onChange",
    });

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
    <Modal onClose={onClose} open={open}>
      <div className="p-3">
        <div className=" flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
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
          </div>
        </div>
      </div>
    </Modal>
  );
}
