"use client";
import { Box, Modal, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePostCategoryGet } from "@domain";
import { PageParams } from "@types";
import { CategoryForm } from "../../components";
import { usePostCategorySchema } from "@schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atualizar Categoria",
  robots: {
    index: false,
  },
};

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  maxWidth: 800,
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  const router = useRouter();
  const schema = usePostCategorySchema();

  const { category, getOne } = usePostCategoryGet();

  useEffect(() => {
    if (categoryId) {
      getOne(categoryId);
    }
  }, []);

  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    router.back();
  };

  return (
    <Modal open onClose={handleClose}>
      <Box sx={style}>
        <CategoryForm schema={schema} initialData={category} editMode />
      </Box>
    </Modal>
  );
}

// TODO: VALIDAR SE O INPUIT ESTA FOCADO E SE FOR FECHAR, VALIDAR SE O QUER SALVAR RASCUNHO OU APAGAR. FEATURE
