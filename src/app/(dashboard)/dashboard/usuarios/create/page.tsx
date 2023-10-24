"use client";import { UserForm } from "../components/UserForm/UserForm";
import { useUserSchema } from "@hooks";

export default function CreateUserPage() {
  const schema = useUserSchema(true);

  return <UserForm schema={schema} />;
}
