"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { changeRoute } from "nextjs-progressloader";
import { useAuth, useAuthService } from "@context";

import { USerProfile } from "@components";

interface Props {
  anchor: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

interface RenderItemProps {
  onClick: () => void;
  label: string;
  hasLoading?: boolean;
}
export function UserOptions({ anchor, onClose, open }: Props) {
  const pathname = usePathname();
  const { user, loading } = useAuth();
  const { logout } = useAuthService();

  const pathName = usePathname();

  const [openConfig, setOpenConfig] = useState<boolean>(false);

  const handleOpenConfigOptions = () => {
    setOpenConfig(true);
  };

  const handleCloseConfigOptions = () => {
    setOpenConfig(false);
  };

  function handleLogout() {
    logout(pathname);
  }

  function RenderItem({
    label,
    onClick,
    hasLoading,
  }: RenderItemProps): JSX.Element {
    return (
      <MenuItem onClick={onClick}>
        <span className="text-sm w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
          {label}
        </span>
        {hasLoading && loading && <CircularProgress size={15} />}
      </MenuItem>
    );
  }

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
            <RenderItem
              onClick={() => changeRoute("dashboard")}
              label="Dashboard"
            />
          )}
          <RenderItem onClick={handleOpenConfigOptions} label="Editar perfil" />

          <RenderItem onClick={handleLogout} label="Desconectar" hasLoading />
        </ul>
      </Menu>

      <USerProfile onClose={handleCloseConfigOptions} open={openConfig} />
    </>
  );
}
