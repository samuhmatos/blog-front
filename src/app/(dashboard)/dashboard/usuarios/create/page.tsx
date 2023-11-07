"use client";
import { UserCreateForm } from "../components/UserForm/components/UserCreateForm";
import { useUserCreateForm } from "../schema";

export default function CreateUserPage() {
  const schema = useUserCreateForm();

  return <UserCreateForm schema={schema} />;
}
