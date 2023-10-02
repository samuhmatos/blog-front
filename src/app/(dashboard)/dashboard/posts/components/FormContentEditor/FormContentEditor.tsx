"use client";import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import {
  CommentEditorProps,
  ContentEditor,
} from "../ContentEditor/ContentEditor";

interface ContentEndEditorType
  extends Pick<CommentEditorProps, "label" | "initialData"> {}

export function FormContentEditor<FormType extends FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...rest
}: ContentEndEditorType & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => {
        return (
          <ContentEditor
            onChange={field.onChange}
            isSubmitted={formState.isSubmitted}
            isDirty={fieldState.isDirty}
            errorMessage={fieldState.error?.message}
            initialData={field.value}
            {...rest}
          />
        );
      }}
    />
  );
}
