"use client";
import { Metadata } from "next";
import { TableUsers } from "./components/Table/TableUsers";
import { Button } from "@components";
import { changeRoute } from "nextjs-progressloader";

export const metadata: Metadata = {
  title: "Usuários",
  robots: {
    index: false,
  },
};

export default function UserManagement() {
  return (
    <>
      <Button
        placeholder="Criar Usuário"
        align="right"
        onClick={() => changeRoute("createUser")}
      />
      <TableUsers />
    </>
  );
}
