"use client";import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";
import React, { ReactNode } from "react";
interface Props {
  loadingPosition?: "center" | "end" | "start";
  type?: "button" | "reset" | "submit";
  endIcon?: ReactNode;
  loading: boolean;
  placeholder: string;
  disabled?: boolean;
}

export function LoadButton({
  loadingPosition = "end",
  type = "submit",
  endIcon,
  loading,
  placeholder,
  disabled = true,
}: Props) {
  return (
    <LoadingButton
      loading={loading}
      loadingPosition={loadingPosition}
      type={type}
      endIcon={endIcon}
      className="py-2.5 px-4 text-xs font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 disabled:bg-gray-500 disabled:text-primary-900 disabled:opacity-60"
      disabled={disabled}
    >
      <span className={`${loading ? "mr-3" : "mr-0"}`}>{placeholder}</span>
    </LoadingButton>
  );
}
