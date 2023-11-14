/* eslint-disable jsx-a11y/alt-text */ /* eslint-disable @next/next/no-img-element */ "use client";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ImagePreviewUploadProps {
  imageURL: string;
  setValue: Dispatch<SetStateAction<File>>;
  value: File;
  errorMessage?: string;
  label?: string;
}

export function ImagePreviewUpload({
  imageURL,
  setValue,
  errorMessage,
  label,
  value,
}: ImagePreviewUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const previewImageRef = useRef<HTMLImageElement>(null);

  function handleClick() {
    inputRef.current!.click();
  }

  useEffect(() => {
    if (value) {
      previewImage();
    }
  }, [value]);

  function previewImage() {
    const reader = new FileReader();
    reader.readAsDataURL(value);

    reader.onload = function (e) {
      let res = e.target?.result as string;
      previewImageRef.current!.setAttribute("src", res);
    };
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

        <img
          className="object-contain w-full h-full"
          src={imageURL}
          ref={previewImageRef}
        />

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
