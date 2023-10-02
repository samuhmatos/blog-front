"use client";import { FormCheckbox, LoadButton } from "@components";
import { UpdateServiceProps, useUpdatePost } from "@domain";
import { ReturnPostSchemaType } from "../../hooks/usePostSchema";
import { CreatePostSchema } from "../../components/Post/PostSchema";

interface Props {
  schema: ReturnPostSchemaType;
  postId: number;
  isDraft: boolean;
}

export function UpdatePostButton({ schema, postId, isDraft }: Props) {
  const { loading, update } = useUpdatePost();
  const { formState, handleSubmit, reset, setValue, getValues, control } =
    schema;

  const formatData = (
    data: CreatePostSchema,
    isDraft: boolean
  ): FormData | UpdateServiceProps => {
    let categoryId = Number(data.category);

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
      form.append("category_id", categoryId);
      form.append("is_draft", isDraft ? 1 : 0);
      form.append("banner", data.image);

      return form;
    }
  };

  const handlePublishPost = (data: CreatePostSchema) => {
    update({
      formData: formatData(data, false),
      postId,
      reset() {
        //reset();
      },
    });
  };

  return (
    <div className="flex gap-3">
      <LoadButton
        loading={loading}
        placeholder="Editar Postagem"
        disabled={!formState.isValid}
        onClick={handleSubmit(handlePublishPost)}
      />

      <FormCheckbox
        control={control}
        name="isDraft"
        defaultValue={isDraft}
        label="Rascunho"
        id="draftCheckBox"
      />
    </div>
  );
}