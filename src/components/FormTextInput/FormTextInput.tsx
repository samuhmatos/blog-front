"use client";import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { InputText, InputTextProps } from "@components";

type InputProps = Omit<InputTextProps, "setValue" | "value" | "errorMessage">;

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <InputText
            {...rest}
            name={name}
            value={field.value}
            setValue={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        );
      }}
    />
  );
}
