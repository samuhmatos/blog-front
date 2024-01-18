"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { CircularProgress, Menu, MenuItem } from "@mui/material";
import { useRouter } from "nextjs-progressloader";

import { USerProfile } from "@components";
import { useSignOut } from "@domain";
import { useAuth } from "@auth";

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
  const router = useRouter();
  const pathName = usePathname();

  const [openConfig, setOpenConfig] = useState<boolean>(false);

  const { session } = useAuth();
  const { loading, signOut } = useSignOut();

  const handleOpenConfigOptions = () => {
    setOpenConfig(true);
  };

  const handleCloseConfigOptions = () => {
    setOpenConfig(false);
  };

  async function handleLogout() {
    await signOut();
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
            {session?.user.name}
          </span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
            {session?.user.email}
          </span>
        </div>

        <ul className="py-1">
          {session?.user.isAdmin && !pathName.includes("/dashboard") && (
            <RenderItem
              onClick={() => router.push("dashboard")}
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
