"use client";
import { useRouter } from "nextjs-progressloader";
import { Button } from "@components";
import { TableUsers } from "./components/Table/TableUsers";

export default function UserManagement() {
  const router = useRouter();

  return (
    <>
      <Button
        placeholder="Criar Usuário"
        align="right"
        onClick={() => router.push("createUser")}
      />
      <TableUsers />
    </>
  );
}
