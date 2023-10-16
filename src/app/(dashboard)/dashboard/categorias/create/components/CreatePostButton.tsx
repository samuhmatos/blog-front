"use client";
import { Button } from "@components";
import { useCreatePost } from "@domain";
import { ReturnPostSchemaType, usePostSchema } from "../../hooks/usePostSchema";
import { CreatePostSchema } from "../../components/Post/PostSchema";

interface Props {
  schema: ReturnPostSchemaType;
}
export function CreatePostButton({ schema }: Props) {
  const { loadingDraft, loadingPublish, createPost } = useCreatePost();
  const { formState, handleSubmit, reset } = schema;

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

  return (
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
  );
}
