import { Dispatch, LegacyRef, SetStateAction } from "react";import { FormLayout } from "../FormLayout/FormLayout";
import { twMerge } from "tailwind-merge";

export interface TextAreaProps {
  rows?: number;
  required?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  label?: string;
  name: string;
  errorMessage?: string;
  ref?: LegacyRef<HTMLDivElement>;
  resize?: boolean;
  counter?: boolean;
}

export function TextAreaInput({
  value,
  placeholder,
  setValue,
  rows = 6,
  required,
  label,
  name,
  errorMessage,
  ref,
  resize = false,
  counter = false,
}: TextAreaProps) {
  function RenderBottomRightComponent() {
    if (counter) {
      return (
        <div
          className={`${
            errorMessage ? "text-red-700" : "text-gray-500"
          }  text-sm text-right font-semibold`}
        >
          <span>{value.length}/255</span>
        </div>
      );
    }

    return null;
  }

  return (
    <FormLayout
      errorMessage={errorMessage}
      label={label}
      name={name}
      bottomRightComponent={<RenderBottomRightComponent />}
    >
      <div
        className={`transition-all py-2 px-4 bg-white rounded-lg rounded-t-lg border dark:bg-gray-800 dark:border-gray-700 ${
          errorMessage ? "border-red-700" : "border-gray-200"
        }`}
        id={`${name}-field`}
        ref={ref}
        onClick={(e) => {
          e.currentTarget.querySelector("textarea")?.focus();
        }}
      >
        <textarea
          id={name}
          rows={rows}
          className={twMerge(
            `px-0 w-full border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800`,
            !resize && "resize-none"
          )}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={name}
        ></textarea>
      </div>
    </FormLayout>
  );
}
