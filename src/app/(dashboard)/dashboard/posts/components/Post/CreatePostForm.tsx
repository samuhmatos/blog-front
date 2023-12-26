"use client";import { Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  FormImagePreviewUpload,
  FormSelectOption,
  FormTextInput,
  FormEditor,
} from "@components";
import { Category, Post, useCreatePost } from "@domain";

import { CreatePostSchema, ReturnCreatePostFormType } from "../../schemas";

export interface PostFormProps<Schema> {
  setCanClose?: () => Dispatch<SetStateAction<boolean>>;
  schema: Schema;
  categories: Category[] | null;
}

export function CreatePostForm({
  setCanClose,
  schema,
  categories,
}: PostFormProps<ReturnCreatePostFormType>) {
  const [draftMode, setDraftMode] = useState<boolean>(false);

  const { loading, mutate: createPost } = useCreatePost();
  const { control, reset, handleSubmit, formState } = schema;

  const options =
    categories?.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })) || [];

  const formatData = (data: CreatePostSchema, isDraft: boolean): FormData => {
    const imgContentList = Array.from(
      new DOMParser()
        .parseFromString(data.content, "text/html")
        .querySelectorAll("img")
    ).map((img) => img.getAttribute("src"));

    var form = new FormData();
    form.append("title", data.title);
    form.append("sub_title", data.subTitle);
    form.append("content", data.content);
    form.append("category_id", data.category);
    form.append("banner", data.image);
    form.append("is_draft", isDraft ? "1" : "0");
    form.append(
      "img_content_list",
      imgContentList.length >= 1 ? JSON.stringify(imgContentList) : "null"
    );

    return form;
  };

  function handlePublishPost(data: CreatePostSchema) {
    setDraftMode(false);
    submitPost(data, false);
  }

  function handleDraftPost(data: CreatePostSchema) {
    setDraftMode(true);
    submitPost(data, true);
  }

  function submitPost(data: CreatePostSchema, isDraft: boolean) {
    createPost(formatData(data, isDraft), () => {
      reset();
    });
  }

  return (
    <div className="p-2 createPostForm">
      <FormImagePreviewUpload control={control} name="image" />

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

      <FormEditor control={control} name="content" label="Conteúdo" />

      <div className="flex gap-3">
        <Button
          loading={loading && !draftMode}
          placeholder="Publicar"
          disabled={!formState.isValid}
          onClick={handleSubmit(handlePublishPost)}
        />

        <Button
          loading={loading && draftMode}
          placeholder="Rascunho"
          disabled={!formState.isValid}
          onClick={handleSubmit(handleDraftPost)}
          paleteColor="warning"
        />
      </div>
    </div>
  );
}
