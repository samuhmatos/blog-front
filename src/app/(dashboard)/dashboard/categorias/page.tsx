"use client";
import { Button } from "@components";
import { TableCategory } from "./components/TableCategory";
import { useRouter } from "next/navigation";
import { linkUtils } from "@utils";

export default function CategoriasPage() {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push(linkUtils.linkDashboard("categorias/create"));
  };

  return (
    <>
      <Button
        placeholder="Criar Categoria"
        onClick={handleOpenModal}
        align="right"
      />

      <TableCategory />
    </>
  );
}
