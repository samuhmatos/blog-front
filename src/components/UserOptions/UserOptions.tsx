"use client";import { useAuth } from "@domain";
import { Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import { USerProfile } from "../UserProfile/UserProfile";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

export function UserOptions({ anchor, onClose, open }: Props) {
  const { user, logout } = useAuth();
  const pathName = usePathname();
  const dashboardRef = useRef<HTMLAnchorElement>(null);

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

        <ul className="py-1">
          {user?.isAdmin && !pathName.includes("/dashboard") && (
            <MenuItem onClick={() => dashboardRef.current?.click()}>
              <span className="block w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Dashboard
              </span>
              <Link href="/dashboard" ref={dashboardRef} className="hidden" />
            </MenuItem>
          )}
          <MenuItem onClick={handleOpenConfigOptions}>
            <span className="text-sm w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Editar perfil
            </span>
          </MenuItem>

          <MenuItem onClick={logout}>
            <span className="text-sm w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Desconectar
            </span>
          </MenuItem>
        </ul>
      </Menu>

      <USerProfile onClose={handleCloseConfigOptions} open={openConfig} />
    </>
  );
}
