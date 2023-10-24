"use client";
import { ReturnUserSchemaType } from "@hooks";
import { User } from "@domain";
import { UserUpdateForm } from "./components/UserUpdateForm";
import { UserCreateForm } from "./components/UserCreateForm";

export interface UserFormProps {
  schema: ReturnUserSchemaType;
  initialData?: User;
}
export function UserForm({ schema, initialData }: UserFormProps) {
  if (initialData) {
    return <UserUpdateForm schema={schema} initialData={initialData} />;
  }

  return <UserCreateForm schema={schema} />;
}
