"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import {
  CommentEditorProps,
  ContentEditor,
} from "../ContentEditor/ContentEditor";

interface ContentEndEditorType extends Pick<CommentEditorProps, "label"> {}

export function FormContentEditor<FormType extends FieldValues>({
  name,
  control,
  rules,
  label,
}: ContentEndEditorType & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        const isDirty = fieldState.isDirty;

        return (
          <ContentEditor
            onChange={field.onChange}
            isDirty={isDirty}
            label={label}
            errorMessage={fieldState.error?.message}
          />
        );
      }}
    />
  );
}
