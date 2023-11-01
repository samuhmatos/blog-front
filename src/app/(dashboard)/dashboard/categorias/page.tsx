"use client";
import { Button } from "@components";
import { TableCategory } from "./components/TableCategory";
import { Metadata } from "next";
import { changeRoute } from "nextjs-progressloader";

export const metadata: Metadata = {
  title: "Categorias",
  robots: {
    index: false,
  },
};

export default function CategoriasPage() {
  const handleOpenModal = () => {
    changeRoute("categoria.create");
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
