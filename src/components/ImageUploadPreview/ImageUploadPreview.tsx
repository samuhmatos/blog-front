"use client";import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Icon } from "../Icon/Icon";

interface Props {
  onUpload: (file: FileList) => void;
  imagePath?: string;
  loading?: boolean;
}

export function ImageUploadPreview({ onUpload, imagePath, loading }: Props) {
  const inputUpload = useRef<HTMLInputElement>(null);
  const buttonUpload = useRef<HTMLButtonElement>(null);

  function handleUpdateAvatar(e: Event) {
    const target = e.target as HTMLInputElement;

    const selectedFile = target.files;

    if (selectedFile) {
      onUpload(selectedFile);
    } else {
      return;
    }
  }

  useEffect(() => {
    inputUpload.current?.addEventListener("change", handleUpdateAvatar);
  }, []);

  function handleOpenUpload() {
    inputUpload.current?.click();
  }

  return (
    <div className="relative mx-auto w-24 h-16 mb-5">
      <img
        src={imagePath || "/assets/user.png"}
        alt="Foto do usuário"
        width={100}
        height={100}
        className="rounded-2xl h-full w-full"
      />

      <button
        className="absolute -bottom-1 right-0 "
        ref={buttonUpload}
        onClick={handleOpenUpload}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={25} />
        ) : (
          <Icon name="Picture" size="text-4xl" className="rounded-lg" />
        )}
      </button>
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .bmp, .svg, .webp"
        className="hidden"
        ref={inputUpload}
      />
    </div>
  );
}
{
  /* <img
          src={imagePath || "/assets/user.png"}
          width={100}
          height={100}
          className="rounded-2xl h-full w-full"
          alt={`Foto do usuário`}
        /> */
}
