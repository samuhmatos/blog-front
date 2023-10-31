"use client";
import { useUserCreateSchema } from "@schema";
import { UserCreateForm } from "../components/UserForm/components/UserCreateForm";

export default function CreateUserPage() {
  const schema = useUserCreateSchema();

  return <UserCreateForm schema={schema} />;
}
