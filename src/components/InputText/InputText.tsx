"use client";
import {
  Dispatch,
  SetStateAction,
  ChangeEvent,
  HTMLInputTypeAttribute,
} from "react";

export interface InputTextProps {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  errorMessage?: string;
  name: string;
  label?: string;
}

export function InputText({
  placeholder,
  name,
  value,
  setValue,
  type = "text",
  errorMessage,
  label,
}: InputTextProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="mb-1 text-sm text-gray-900">
      {label && <span className="font-bold">{label}</span>}

      <div
        className={`transition-all py-2 px-4 bg-white rounded-lg rounded-t-lg border dark:bg-gray-800 dark:border-gray-700 ${
          errorMessage ? "border-red-700" : "border-gray-200"
        }`}
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
        />
      </div>
      {errorMessage && (
        <span className="text-red-700 font-semibold">{errorMessage}</span>
      )}
    </div>
  );
}
