"use client";
import { useAuth, useUserUpdate } from "@domain";
import Image from "next/image";
import { AiFillPicture } from "react-icons/ai";
import { useEffect, useRef } from "react";

export function UserHeader() {
  const { user } = useAuth();

  const inputUpload = useRef<HTMLInputElement>(null);
  const buttonUpload = useRef<HTMLButtonElement>(null);

  const { loading, update } = useUserUpdate();

  function handleUpdateAvatar(e: Event) {
    const target = e.target as HTMLInputElement;

    const selectedFile = target.files;

    if (selectedFile) {
      var formData = new FormData();
      formData.append("image", selectedFile[0]);

      update(user!.id, formData);
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
    <div>
      <div className="relative mx-auto w-24 h-16">
        <Image
          // src={
          //   "https://via.placeholder.com/640x480.png/006655?text=consequatur"
          // }
          src={user?.imageURL || "/assets/user.png"}
          alt="Foto do usuário"
          width={100}
          height={100}
          className="rounded-2xl"
        />
        <button
          className="absolute -bottom-1 right-0 text-3xl rounded-lg"
          ref={buttonUpload}
          onClick={handleOpenUpload}
        >
          <AiFillPicture />
        </button>
        <input
          type="file"
          id="avatar-upload"
          accept=".jpg, .jpeg, .png, .bmp, .svg, .webp"
          className="hidden"
          ref={inputUpload}
        />
      </div>
    </div>
  );
}
