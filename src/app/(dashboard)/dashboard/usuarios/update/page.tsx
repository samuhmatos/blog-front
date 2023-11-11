"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUserGet } from "@domain";
import { PageParams } from "@types";
import { CircularProgress } from "@mui/material";

import { UserUpdateForm } from "../components/UserForm/components/UserUpdateForm";
import { useUserUpdateForm } from "../schema";

export default function UpdateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();

  useEffect(() => {
    if (!id) {
      router.back();
    }
  }, [id]);

  const { user, isLoading } = useUserGet(id);

  const schema = useUserUpdateForm();

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <CircularProgress size={40} />
      </div>
    );

  return <UserUpdateForm schema={schema} initialData={user} />;
}
