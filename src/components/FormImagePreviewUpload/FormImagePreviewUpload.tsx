"use client";import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { ImagePreviewUploadProps, ImagePreviewUpload } from "@components";

type InputProps = Omit<
  ImagePreviewUploadProps,
  "setValue" | "errorMessage" | "value"
>;

export function FormImagePreviewUpload<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...rest
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <ImagePreviewUpload
            setValue={field.onChange}
            errorMessage={fieldState.error?.message}
            value={field.value}
            {...rest}
          />
        );
      }}
    />
  );
}
