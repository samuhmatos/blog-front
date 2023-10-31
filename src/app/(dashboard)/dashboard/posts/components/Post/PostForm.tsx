"use client";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  FormImagePreviewUpload,
  FormSelectOption,
  FormTextInput,
} from "@components";

import { FormContentEditor } from "../FormContentEditor/FormContentEditor";
import { Post } from "@domain";
import { ReturnPostSchemaType } from "@schema";

interface Props {
  setCanClose?: () => Dispatch<SetStateAction<boolean>>;
  initialData?: Post;
  ActionsButton: React.ReactNode;
  schema: ReturnPostSchemaType;
}

export function PostForm({
  setCanClose,
  initialData,
  ActionsButton,
  schema,
}: Props) {
  const { control, categories, setValue } = schema;

  async function setInitialData() {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("subTitle", initialData.subTitle);
      setValue("content", initialData.content);
      setValue("category", initialData.categoryId.toString());
      setValue("isDraft", initialData.isDraft);
    }
  }

  useEffect(() => {
    setInitialData();
  }, [initialData]);

  const options =
    categories?.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })) || [];

  return (
    <div className="p-2 createPostForm">
      <FormImagePreviewUpload
        control={control}
        imageURL={
          initialData?.imageURL ||
          "https://images.unsplash.com/photo-1554629947-334ff…=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        }
        name="image"
      />

      <FormSelectOption
        control={control}
        options={options}
        name="category"
        label="Categoria"
      />

      <FormTextInput
        control={control}
        name="title"
        placeholder="Digite o título..."
        label="Título"
      />

      <FormTextInput
        control={control}
        name="subTitle"
        placeholder="Digite o seu sub título..."
        label="Sub Título"
      />

      <FormContentEditor
        control={control}
        name="content"
        label="Conteúdo"
        defaultValue={initialData?.content || undefined}
      />

      {ActionsButton}
    </div>
  );
}

// FIXME: CORRIGIR TIPAGEM PARA NUMBER CATEGORY
