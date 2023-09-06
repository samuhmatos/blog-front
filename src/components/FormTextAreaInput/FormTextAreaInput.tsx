"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextAreaProps, TextAreaInput } from "../TextAreaInput/TextAreaInput";

type InputTextareaType = Omit<
  TextAreaProps,
  "setValue" | "value" | "errorMessage"
>;

export function FormTextAreaInput<FormType extends FieldValues>({
  control,
  rules,
  name,
  ...InputAreaProps
}: InputTextareaType & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextAreaInput
          {...InputAreaProps}
          name={name}
          errorMessage={fieldState.error?.message}
          setValue={field.onChange}
          value={field.value}
        />
      )}
    />
  );
}
