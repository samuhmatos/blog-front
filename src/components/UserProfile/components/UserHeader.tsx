"use client";
import { useUserUpdate } from "@domain";
import { useAuth } from "@context";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Icon } from "../../Icon/Icon";

export function UserHeader() {
  const { user } = useAuth();

  const inputUpload = useRef<HTMLInputElement>(null);
  const buttonUpload = useRef<HTMLButtonElement>(null);

  const { mutate } = useUserUpdate();
  const [loading, setLoading] = useState<boolean>(false);

  function handleUpdateAvatar(e: Event) {
    const target = e.target as HTMLInputElement;

    const selectedFile = target.files;

    if (selectedFile) {
      setLoading(true);

      var formData = new FormData();
      formData.append("image", selectedFile[0]);

      mutate({ userId: user!.id, params: formData });
      setLoading(false);
    } else {
      return;
    }
    setLoading(false);
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
        {/* <Image
          src={user?.imageURL || "/assets/user.png"}
          alt="Foto do usuário"
          width={100}
          height={100}
          className="rounded-2xl"
        /> */}

        <img
          src={user?.imageURL || "/assets/user.png"}
          width={100}
          height={100}
          className="rounded-2xl h-full w-full"
          alt={`Foto do usuário`}
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
          id="avatar-upload"
          accept=".jpg, .jpeg, .png, .bmp, .svg, .webp"
          className="hidden"
          ref={inputUpload}
        />
      </div>
    </div>
  );
}
