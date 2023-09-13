"use client";import { useAuth } from "@domain";
import Image from "next/image";
import { useState } from "react";
import { UserOptions } from "../UserOptions/UserOptions";

export function UserCard() {
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openOptions = Boolean(anchorEl);

  const closeModal = () => {
    setAnchorEl(null);
  };

  const handleOpenUserOptions = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserOptions = () => {
    closeModal();
  };

  return (
    <>
      <button
        aria-controls={openOptions ? `user-dropdown-options}` : undefined}
        aria-haspopup="true"
        aria-expanded={openOptions ? "true" : undefined}
        type="button"
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-primary-700 dark:focus:ring-gray-600"
        id="user-dropDown"
        onClick={handleOpenUserOptions}
      >
        <span className="sr-only">Abrir Menu</span>

        <img
          src={user?.imageURL || "/assets/user.png"}
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
          alt={`Foto do usuário`}
        />

        {/* <Image
          width={100}
          height={100}
          className="w-8 h-8 rounded-full"
          //src={user?.imageURL || "/assets/user.png"}
          src="http://localhost:8000/storage/uploads/users/eP4AhjMCBK7JH038rbpOSRm978LpvzI93B0tlRKH.jpg"
          alt={`Foto do usuário`}
        /> */}
      </button>

      <UserOptions
        anchor={anchorEl}
        onClose={handleCloseUserOptions}
        open={openOptions}
      />
    </>
  );
}
