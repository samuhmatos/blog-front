"use client";import { twMerge } from "tailwind-merge";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import React, { ReactNode } from "react";
import { CircularProgress } from "@mui/material";

interface Props {
  loadingPosition?: "center" | "end" | "start";
  type?: "button" | "reset" | "submit";
  endIcon?: ReactNode;
  loading?: boolean;
  placeholder: string | ReactNode;
  disabled?: boolean;
  full?: boolean;
  className?: string;
  onClick?: () => void;
  paleteColor?: "default" | "danger" | "warning";
}

export function LoadButton({
  loadingPosition = "end",
  type = "button",
  endIcon,
  loading = false,
  placeholder,
  disabled = false,
  full,
  className,
  onClick,
  paleteColor = "default",
}: Props) {
  const position = () => {
    switch (loadingPosition) {
      case "start":
        return "flex-row-reverse";
      case "center":
        return "justify-center";
      default:
        return "flex-row";
        break;
    }
  };

  const paleteColors = (): string => {
    switch (paleteColor) {
      case "danger":
        return "bg-red-700 hover:bg-red-800 text-gray-200 disabled:bg-red-900 disabled:text-gray-400";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700 text-primary-950 disabled:bg-yellow-800 disabled:text-gray-400";
      default:
        return "bg-primary-700 hover:bg-primary-800 disabled:bg-primary-950 dark:focus:ring-primary-900 text-gray-200 disabled:text-gray-400";
    }
  };

  const renderPlaceholder = () => {
    if (loadingPosition === "center" && loading) {
      return null;
    }

    return <span>{placeholder}</span>;
  };

  const renderIcon = () => {
    const circularProgress = <CircularProgress size={16} color="inherit" />;

    if (loading) {
      return circularProgress;
    }

    if (endIcon) {
      return endIcon;
    }

    return null;
  };

  return (
    <button
      className={twMerge(
        `py-2 px-4 text-sm font-medium rounded-lg flex items-center gap-2  focus:ring-4 focus:ring-primary-200 disabled:opacity-90 disabled:cursor-default cursor-pointer `,
        [full ? "w-full" : "", position(), paleteColors(), className]
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {renderPlaceholder()}
      {renderIcon()}
    </button>
  );
}

// FIXME: TYPE DEFAULT AGORA É BUTTON, CORRGIR AONDE PRECISA PARA PODER FUNCIONAR NORMALMMENTE
