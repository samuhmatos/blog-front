"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { FileInput, InputFileProps } from "@components";
import { useRef } from "react";

type InputProps = Omit<InputFileProps, "setValue" | "errorMessage" | "value">;

export function FormFileInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <FileInput
            setValue={field.onChange}
            errorMessage={fieldState.error?.message}
            label={label}
            value={field.value}
          />
        );
      }}
    />
  );
}
