"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { Editor, CommentEditorProps } from "@components";

interface ContentEndEditorType
  extends Pick<CommentEditorProps, "label" | "initialData"> {}

export function FormEditor<FormType extends FieldValues>({
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
          <Editor
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
