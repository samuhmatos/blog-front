"use client";
import { useUserGet } from "@domain";
import { useUserUpdateSchema } from "@schema";
import { PageParams } from "@types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserUpdateForm } from "../components/UserForm/components/UserUpdateForm";

export default function UpdateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  const router = useRouter();
  const { user, loading, show } = useUserGet();

  useEffect(() => {
    if (id) {
      show(id);
    } else {
      router.back();
    }
  }, []);

  const schema = useUserUpdateSchema();

  return <UserUpdateForm schema={schema} initialData={user} />;
}
