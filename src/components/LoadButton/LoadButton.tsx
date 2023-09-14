"use client";
import { twMerge } from "tailwind-merge";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import React, { ReactNode } from "react";

interface Props {
  loadingPosition?: "center" | "end" | "start";
  type?: "button" | "reset" | "submit";
  endIcon?: ReactNode;
  loading: boolean;
  placeholder: string;
  disabled?: boolean;
  full?: boolean;
  className?: string;
  onClick?: () => void;
}

export function LoadButton({
  loadingPosition = "end",
  type = "submit",
  endIcon,
  loading,
  placeholder,
  disabled = false,
  full,
  className,
  onClick,
}: Props) {
  return (
    <LoadingButton
      loading={loading}
      loadingPosition={loadingPosition}
      type={type}
      endIcon={endIcon}
      className={twMerge(
        `py-2 px-4 text-xs font-medium text-gray-200 bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900  hover:bg-primary-800 disabled:bg-primary-950 disabled:text-gray-400 disabled:opacity-90`,
        [full && "w-full", className]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={`${loading && !full ? "mr-3" : "mr-0"}`}>
        {placeholder}
      </span>
    </LoadingButton>
  );
}
//  s    disabled:opacity-60  disabled:font-bold  disabled:text-gray-100
