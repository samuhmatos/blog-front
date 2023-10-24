"use client";import {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  HTMLInputTypeAttribute,
} from "react";
import { FormLayout } from "../FormLayout/FormLayout";
import { twMerge } from "tailwind-merge";

export interface InputTextProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  errorMessage?: string;
  name: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  baseClassName?: string;
}

export function InputText({
  placeholder,
  name,
  value,
  setValue,
  type = "text",
  errorMessage,
  label,
  className,
  disabled = false,
  baseClassName,
}: InputTextProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <FormLayout
      errorMessage={errorMessage}
      label={label}
      name={name}
      className={baseClassName}
    >
      <div
        className={twMerge(
          `transition-all py-2 px-4 bg-white rounded-lg border dark:bg-gray-800 dark:border-gray-700`,
          errorMessage ? "border-red-700" : "border-gray-200",
          className
        )}
        onClick={(e) => {
          e.currentTarget.querySelector("input")?.focus();
        }}
      >
        <input
          type={type}
          className={`px-0 w-full border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          name={name}
          id={name}
          disabled={disabled}
        />
      </div>
    </FormLayout>
  );
}
