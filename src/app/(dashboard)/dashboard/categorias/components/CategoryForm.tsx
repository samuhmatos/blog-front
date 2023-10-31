"use client";
import {
  Category,
  usePostCategoryCreate,
  usePostCategoryUpdate,
} from "@domain";
import { useEffect } from "react";
import { Button, FormTextInput } from "@components";
import { useRouter } from "next/navigation";
import { PostCategorySchema, ReturnPostCategorySchemaType } from "@schema";
import { eventUtils } from "@utils";

interface Props {
  initialData?: Category;
  schema: ReturnPostCategorySchemaType;
  editMode?: boolean;
}
export function CategoryForm({ schema, initialData, editMode = false }: Props) {
  const router = useRouter();
  const { control, setValue, reset, handleSubmit, formState } = schema;

  const { loading: loadingCreate, create } = usePostCategoryCreate();
  const { loading: loadingEdit, update } = usePostCategoryUpdate();

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
        initialData!.id,
        {
          name: params.name,
          description: params.description,
        },
        () => {
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
