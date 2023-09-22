"use client";
import { Dispatch, SetStateAction } from "react";
import { CreatePostSchema, createPostSchema } from "./CreatePostSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormFileInput,
  FormSelectOption,
  FormTextInput,
  LoadButton,
} from "@components";

import { FormContentEditor } from "../FormContentEditor/FormContentEditor";
import { useCreatePost, usePostCategory } from "@domain";

interface Props {
  setCanClose?: () => Dispatch<SetStateAction<boolean>>;
}

export function CreatePostForm({ setCanClose }: Props) {
  const { categories: data } = usePostCategory();
  const { loadingDraft, loadingPublish, createPost } = useCreatePost();

  const categoriesId = data?.map((value) => value.id.toString()) || [];

  const { control, formState, handleSubmit, reset } = useForm<CreatePostSchema>(
    {
      resolver: zodResolver(createPostSchema(categoriesId)),
      defaultValues: {
        title: "",
        subTitle: "",
        content: "",
        category: "",
      },
      mode: "onChange",
    }
  );

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
    createPost({
      formData: formatData(data, false),
      isDraft: false,
      reset: () => {
        reset();
      },
    });
  };

  const handleDraftPost = (data: CreatePostSchema) => {
    createPost({
      formData: formatData(data, true),
      isDraft: true,
      reset: () => {
        reset();
      },
    });
  };

  const options =
    data?.map((category) => ({
      value: category.id.toString(),
      label: category.name,
    })) || [];

  return (
    <div className="p-2 createPostForm">
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

      <FormFileInput control={control} name="image" label="Upload banner" />

      <FormTextInput
        control={control}
        name="subTitle"
        placeholder="Digite o seu sub título..."
        label="Sub Título"
      />

      <FormContentEditor control={control} name="content" label="Conteúdo" />

      <div className="flex gap-3">
        <LoadButton
          loading={loadingPublish}
          placeholder="Publicar"
          disabled={!formState.isValid}
          onClick={handleSubmit(handlePublishPost)}
        />

        <LoadButton
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
