"use client";import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";
import {
  Button,
  FormCheckbox,
  FormImagePreviewUpload,
  FormSelectOption,
  FormTextInput,
  FormEditor,
} from "@components";
import { UpdateServiceProps, useUpdatePost } from "@domain";
import { QueryKeys } from "@infra";
import { eventUtils } from "@utils";

import { ReturnUpdatePostFormType, UpdatePostSchema } from "../../schemas";
import { PostFormProps } from "./CreatePostForm";

export function UpdatePostForm({
  setCanClose,
  initialData,
  schema,
  categories,
}: PostFormProps<ReturnUpdatePostFormType>) {
  const queryClient = useQueryClient();

  const { loading, mutate: update } = useUpdatePost();
  const { formState, handleSubmit, setValue, control } = schema;

  const formatData = (
    data: UpdatePostSchema,
    isDraft: boolean
  ): FormData | UpdateServiceProps => {
    if (!data.image) {
      return {
        title: data.title,
        subTitle: data.subTitle,
        content: data.content,
        category: data.category,
        isDraft: data.isDraft,
      };
    } else {
      var form = new FormData();
      form.append("title", data.title);
      form.append("sub_title", data.subTitle);
      form.append("content", data.content);
      form.append("category_id", data.category);
      form.append("is_draft", isDraft ? "1" : "0");
      form.append("banner", data.image);

      return form;
    }
  };

  const handleUpdate = (data: UpdatePostSchema) => {
    update(
      {
        formData: formatData(data, false),
        postId: initialData?.id!,
      },
      () => {
        eventUtils.emit("close-modal");
        queryClient.invalidateQueries({
          queryKey: [QueryKeys.GetPost, initialData!.id],
        });
      }
    );
  };

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

      <FormEditor
        control={control}
        name="content"
        label="Conteúdo"
        defaultValue={initialData?.content || undefined}
      />

      <div className="flex gap-3">
        <Button
          loading={loading}
          placeholder="Editar Postagem"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleUpdate)}
        />

        <FormCheckbox
          control={control}
          name="isDraft"
          label="Rascunho"
          id="draftCheckBox"
        />
      </div>
    </div>
  );
}

// TODO: ROW INPUT CHECKBOX BUG
