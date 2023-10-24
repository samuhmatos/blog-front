"use client";import { useUserGet } from "@domain";
import { UserForm } from "../components/UserForm/UserForm";
import { useUserSchema } from "@hooks";
import { PageParams } from "@types";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

  const schema = useUserSchema();

  return <UserForm schema={schema} initialData={user} />;
}
