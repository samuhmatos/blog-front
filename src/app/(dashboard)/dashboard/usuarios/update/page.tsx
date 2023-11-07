"use client";
import { useUserGet } from "@domain";
import { PageParams } from "@types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserUpdateForm } from "../components/UserForm/components/UserUpdateForm";
import { useUserUpdateForm } from "../schema";

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

  const schema = useUserUpdateForm();

  return <UserUpdateForm schema={schema} initialData={user} />;
}
