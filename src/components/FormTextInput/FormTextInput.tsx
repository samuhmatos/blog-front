"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { InputText, InputTextProps } from "@components";

type InputProps = Omit<InputTextProps, "setValue" | "value" | "errorMessage">;

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  type,
  label,
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <InputText
            name={name}
            placeholder={placeholder}
            type={type}
            value={field.value}
            setValue={field.onChange}
            errorMessage={fieldState.error?.message}
            label={label}
          />
        );
      }}
    />
  );
}
