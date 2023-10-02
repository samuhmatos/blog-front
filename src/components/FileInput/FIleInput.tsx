"use client";import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface InputFileProps {
  setValue: Dispatch<SetStateAction<File>>;
  errorMessage?: string;
  label?: string;
  value: File | undefined;
  visible?: boolean;
}

export function FileInput({
  setValue,
  errorMessage,
  label,
  value,
  visible = false,
}: InputFileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && value !== inputRef.current.files![0]) {
      inputRef.current.value = "";
    }
  }, [value]);

  return (
    <div
      className={twMerge(
        "mb-1 text-sm text-gray-900 dark:text-white",
        visible && "hidden"
      )}
    >
      {label && (
        <label className="block mb-2 text-sm font-bold" htmlFor="file_input">
          {label}
        </label>
      )}

      <input
        className={twMerge(
          "block w-full text-sm transition-all border rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-800  dark:placeholder-gray-400 file:py-2 file:cursor-pointer",
          errorMessage
            ? "border-red-700"
            : "border-gray-200 dark:border-gray-700"
        )}
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={(e) => {
          var files = e.target.files;
          if (files) setValue(files[0]);
        }}
        accept=".png, .jpg, .jpeg, .webp"
        ref={inputRef}
      />
      {errorMessage && (
        <span className="text-red-700 font-semibold">{errorMessage}</span>
      )}
    </div>
  );
}
