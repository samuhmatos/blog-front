"use client";import { useAuth } from "@domain";
import { Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { USerProfile } from "../UserProfile/UserProfile";
import { usePathname } from "next/navigation";

interface Props {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

export function UserOptions({ anchor, onClose, open }: Props) {
  const { user, logout } = useAuth();
  const pathName = usePathname();

  const [openConfig, setOpenConfig] = useState<boolean>(false);

  const handleOpenConfigOptions = () => {
    setOpenConfig(true);
  };

  const handleCloseConfigOptions = () => {
    setOpenConfig(false);
  };

  return (
    <>
      <Menu
        anchorEl={anchor}
        open={open}
        onClose={onClose}
        className="text-base mt-1"
        id="user-dropdown-options"
      >
        <div className="px-4">
          <span className="block text-sm text-gray-900 dark:text-white">
            {user?.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {user?.email}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          {user?.isAdmin && !pathName.includes("/dashboard") && (
            <MenuItem>
              <Link
                href="/dashboard"
                className="block  text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </MenuItem>
          )}
          <MenuItem
            onClick={handleOpenConfigOptions}
            className="text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Editar perfil
          </MenuItem>

          <MenuItem>
            <button
              onClick={logout}
              className="text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Desconectar
            </button>
          </MenuItem>
        </ul>
      </Menu>

      <USerProfile onClose={handleCloseConfigOptions} open={openConfig} />
    </>
  );
}
