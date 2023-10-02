"use client";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { CheckboxProps, Checkbox } from "@components";

type Checkbox = Omit<CheckboxProps, "onChange" | "checked">;

export function FormCheckbox<FormType extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  ...rest
}: Checkbox & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => {
        return (
          <Checkbox
            onChange={field.onChange}
            checked={field.value || false}
            {...rest}
          />
        );
      }}
    />
  );
}
