"use client";import { twMerge } from "tailwind-merge";
import React, { HTMLAttributes, ReactNode } from "react";
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
  outline?: boolean;
}

export function Button({
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
  outline,
}: Props) {
  const position = () => {
    switch (loadingPosition) {
      case "start":
        return "flex-row-reverse";
      case "center":
        return "justify-center";
      default:
        return "flex-row justify-between";
    }
  };

  const paleteColors = (): HTMLButtonElement["className"] => {
    var outlineStyle = "bg-gray-100 text-primary-950 border";

    switch (paleteColor) {
      case "danger":
        if (outline) {
          return twMerge(
            outlineStyle,
            "border-red-700 hover:text-gray-200 hover:bg-red-700"
          );
        }

        return twMerge(
          "bg-red-700 text-gray-200 disabled:bg-red-900 hover:bg-red-800"
        );
      case "warning":
        if (outline) {
          return twMerge(outlineStyle, "border-yellow-600 hover:bg-yellow-600");
        }

        return twMerge(
          "bg-yellow-600 hover:bg-yellow-700 text-primary-950 disabled:bg-yellow-800"
        );
      default:
        if (outline) {
          return twMerge(
            outlineStyle,
            "border-primary-700 hover:bg-primary-700 disabled:bg-primary-950 hover:text-gray-200"
          );
        }

        return "bg-primary-700 hover:bg-primary-800 disabled:bg-primary-950 text-gray-200";
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
        `py-1.5 px-4 text-sm font-medium rounded-lg flex items-center gap-2  focus:ring-4 focus:ring-primary-200 disabled:opacity-90 cursor-pointer transition-all disabled:cursor-not-allowed disabled:text-gray-900 disabled:bg-gray-400 disabled:border-none`,
        [
          full ? "w-full" : "",
          loading && "cursor-progress",
          position(),
          paleteColors(),
          className,
        ]
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
