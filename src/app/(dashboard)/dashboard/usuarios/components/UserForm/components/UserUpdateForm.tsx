"use client";
import { useUserUpdate } from "@domain";
import { UserFormProps } from "../UserForm";
import { UserSchema } from "@schema";
import { eventUtils } from "@utils";
import {
  Button,
  FormTextAreaInput,
  FormTextInput,
  ImageUploadPreview,
} from "@components";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function UserUpdateForm({ schema, initialData }: UserFormProps) {
  const router = useRouter();

  const { control, formState, setValue, handleSubmit } = schema;
  const [imageProfile, setImageProfile] = useState<string | undefined>();
  const [id, setId] = useState<number>();

  const { update, loading: loadingUpdate, user } = useUserUpdate();

  useEffect(() => {
    if (initialData) {
      setValue("description", initialData.description || undefined);
      setValue("name", initialData.name);
      setValue("username", initialData.username);
      setValue("email", initialData.email);

      setImageProfile(initialData.imageURL || undefined);
      setId(initialData.id);
    }
  }, [initialData]);

  function handleUploadAvatar(file: FileList) {
    var formData = new FormData();
    formData.append("image", file[0]);

    update(id!, formData);
  }

  function renderImageProfile() {
    if (user?.imageURL) {
      setImageProfile(user.imageURL);
    }
  }

  function close() {
    router.back();
  }

  useEffect(() => {
    if (user) {
      renderImageProfile();
    }
  }, [user]);

  function handleUpdate(val: UserSchema) {
    var form = new FormData();

    if (initialData?.name != val.name) {
      form.append("name", val.name);
    }

    if (val.description && initialData?.description != val.description) {
      form.append("description", val.description);
    }

    if (initialData?.username != val.username) {
      form.append("username", val.username);
    }

    if (initialData?.email != val.email) {
      form.append("email", val.email);
    }

    update(id!, form, () => {
      eventUtils.emit("close-modal");
      close();
    });
  }

  return (
    <div>
      <ImageUploadPreview
        imagePath={imageProfile}
        loading={loadingUpdate}
        onUpload={handleUploadAvatar}
      />

      <div className="flex w-full gap-3">
        <FormTextInput
          control={control}
          name="name"
          placeholder="Digite o nome..."
          label="Nome"
          baseClassName="w-full"
        />
        <FormTextInput
          control={control}
          name="username"
          placeholder="Digite o usuário..."
          label="Usuário"
          baseClassName="w-full"
        />
      </div>

      <div className="my-3">
        <FormTextInput
          control={control}
          name="email"
          placeholder="Digite o email..."
          label="Email"
        />
      </div>

      <FormTextAreaInput
        control={control}
        name="description"
        placeholder="Digite a descrição..."
        label="Descrição"
      />

      <div className="flex gap-3 w-full justify-center mt-3">
        <Button
          placeholder="Editar"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleUpdate)}
          loading={loadingUpdate}
        />

        <Button
          placeholder="Cancelar"
          full
          paleteColor="danger"
          outline
          onClick={close}
        />
      </div>
    </div>
  );
}
