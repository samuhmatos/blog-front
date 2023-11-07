"use client";import { Dispatch, SetStateAction } from "react";
import {
  Button,
  FormImagePreviewUpload,
  FormSelectOption,
  FormTextInput,
} from "@components";

import { FormContentEditor } from "../FormContentEditor/FormContentEditor";
import { Category, Post, useCreatePost } from "@domain";
import { CreatePostSchema, ReturnCreatePostFormType } from "../../schemas";

export interface PostFormProps<Schema> {
  setCanClose?: () => Dispatch<SetStateAction<boolean>>;
  initialData?: Post;
  schema: Schema;
  categories: Category[] | null;
}

export function CreatePostForm({
  setCanClose,
  initialData,
  schema,
  categories,
}: PostFormProps<ReturnCreatePostFormType>) {
  const { loadingDraft, loadingPublish, createPost } = useCreatePost();
  const { control, reset, handleSubmit, formState } = schema;

  const options =
    categories?.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })) || [];

  const formatData = (data: CreatePostSchema, isDraft: boolean): FormData => {
    let categoryId = Number(data.category);

    var form = new FormData();
    form.append("title", data.title);
    form.append("sub_title", data.subTitle);
    form.append("content", data.content);
    form.append("category_id", categoryId);
    form.append("banner", data.image);
    form.append("is_draft", isDraft ? 1 : 0);

    return form;
  };

  const handlePublishPost = (data: CreatePostSchema) => {
    submitPost(data, true);
  };

  const handleDraftPost = (data: CreatePostSchema) => {
    submitPost(data, false);
  };

  function submitPost(data: CreatePostSchema, isDraft: boolean) {
    createPost({
      formData: formatData(data, true),
      isDraft,
      reset: () => {
        reset();
      },
    });
  }

  return (
    <div className="p-2 createPostForm">
      <FormImagePreviewUpload
        control={control}
        imageURL={initialData?.imageURL}
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

      <div className="flex gap-3">
        <Button
          loading={loadingPublish}
          placeholder="Publicar"
          disabled={!formState.isValid}
          onClick={handleSubmit(handlePublishPost)}
        />

        <Button
          loading={loadingDraft}
          placeholder="Rascunho"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleDraftPost)}
          paleteColor="warning"
        />
      </div>
    </div>
  );
}

// FIXME: CORRIGIR TIPAGEM PARA NUMBER CATEGORY
