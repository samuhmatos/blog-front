"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { SelectOption, SelectedOptionProps } from "@components";

type InputProps = Omit<
  SelectedOptionProps,
  "setValue" | "errorMessage" | "value"
>;

export function FormSelectOption<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  options,
}: InputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <SelectOption
            value={field.value}
            setValue={field.onChange}
            label={label}
            errorMessage={fieldState.error?.message}
            options={options}
          />
        );
      }}
    />
  );
}
