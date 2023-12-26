"use client";
import { useRouter } from "nextjs-progressloader";
import { Button } from "@components";
import { TableCategory } from "./components/TableCategory";

export default function CategoriasPage() {
  const router = useRouter();

  const handleOpenModal = () => {
    router.push("categoria.create");
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
