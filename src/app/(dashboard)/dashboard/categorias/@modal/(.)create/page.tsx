"use client";
import { Box, Modal, SxProps, Theme } from "@mui/material";
import { useRouter } from "next/navigation";
import { CategoryForm } from "../../components";
import { usePostCategorySchema } from "../../hooks/usePostCategorySchema";
import { linkUtils } from "@utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Categoria",
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

export default function CreatePostPage() {
  const router = useRouter();

  const handleClose = (
    event: {},
    reason: "backdropClick" | "escapeKeyDown"
  ) => {
    router.back();
  };

  const schema = usePostCategorySchema();

  return (
    <Modal open onClose={handleClose}>
      <Box sx={style}>
        <CategoryForm schema={schema} />
      </Box>
    </Modal>
  );
}

// TODO: VALIDAR SE O INPUIT ESTA FOCADO E SE FOR FECHAR, VALIDAR SE O QUER SALVAR RASCUNHO OU APAGAR. FEATURE
