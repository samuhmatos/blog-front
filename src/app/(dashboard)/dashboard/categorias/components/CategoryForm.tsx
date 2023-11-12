"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Category,
  usePostCategoryCreate,
  usePostCategoryUpdate,
} from "@domain";
import { Button, FormTextInput } from "@components";
import { eventUtils } from "@utils";

import { PostCategorySchema, ReturnPostCategoryFormType } from "../schema";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "@infra";

interface Props {
  initialData?: Category;
  schema: ReturnPostCategoryFormType;
  editMode?: boolean;
}

export function CategoryForm({ schema, initialData, editMode = false }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { control, setValue, reset, handleSubmit, formState } = schema;

  const { loading: loadingCreate, mutate: create } = usePostCategoryCreate();
  const { loading: loadingEdit, mutate: update } = usePostCategoryUpdate();

  async function setInitialData() {
    if (initialData) {
      setValue("name", initialData.name);
      setValue("description", initialData.description);
    }
  }

  useEffect(() => {
    setInitialData();
  }, [initialData]);

  function handleClose() {
    reset();
    router.back();
  }

  function onSubmit(params: PostCategorySchema) {
    if (editMode) {
      update(
        {
          categoryId: initialData!.id,
          params: {
            name: params.name,
            description: params.description,
          },
        },
        () => {
          queryClient.invalidateQueries({
            queryKey: [QueryKeys.PostCategoryGet, initialData!.id],
          });
          eventUtils.emit("close-modal");
          handleClose();
        }
      );
    } else {
      create(
        {
          name: params.name,
          description: params.description,
        },
        () => {
          eventUtils.emit("close-modal");
          handleClose();
        }
      );
    }
  }

  return (
    <div className="p-2">
      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite o nome da categoria..."
        label="Nome"
      />

      <div className="mt-3">
        <FormTextInput
          control={control}
          name="description"
          placeholder="Digite a descrição da categoria..."
          label="Descrição"
        />
      </div>

      <div className="flex gap-3 mt-4">
        <Button
          placeholder={editMode ? "Atualizar" : "Enviar"}
          onClick={handleSubmit(onSubmit)}
          loading={editMode ? loadingEdit : loadingCreate}
          disabled={!formState.isValid}
        />
        <Button
          placeholder="Cancelar"
          paleteColor="danger"
          onClick={handleClose}
        />
      </div>
    </div>
  );
}
