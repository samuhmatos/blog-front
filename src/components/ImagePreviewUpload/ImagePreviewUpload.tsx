/* eslint-disable @next/next/no-img-element */ "use client";
import { Dispatch, SetStateAction, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ImagePreviewUploadProps {
  imageURL: string;
  value: File | undefined;
  setValue: Dispatch<SetStateAction<File>>;
  errorMessage?: string;
  label?: string;
}

export function ImagePreviewUpload({
  imageURL,
  setValue,
  value,
  errorMessage,
  label,
}: ImagePreviewUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current!.click();
  }

  return (
    <div
      className={twMerge("w-1/2 mx-auto cursor-pointer")}
      onClick={handleClick}
    >
      <div
        className={twMerge(
          "h-48 border border-collapse",
          errorMessage ? "border-red-700" : "border-primary-500"
        )}
      >
        {label && (
          <label className="block mb-2 text-sm font-bold" htmlFor="file_input">
            {label}
          </label>
        )}

        <img className="object-none w-full h-full" src={imageURL} />

        <input
          type="file"
          className="hidden"
          ref={inputRef}
          onChange={(e) => {
            var files = e.target.files;
            if (files) setValue(files[0]);
          }}
          accept=".png, .jpg, .jpeg, .webp"
        />
      </div>
      {errorMessage && (
        <span className="text-red-700 font-semibold">{errorMessage}</span>
      )}
    </div>
  );
}
