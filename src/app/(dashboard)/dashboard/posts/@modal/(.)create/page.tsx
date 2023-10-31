"use client";
import { Box, Modal, SxProps, Theme } from "@mui/material";
import { PostForm } from "../../components/";
import { useRouter } from "next/navigation";
import { CreatePostButton } from "../../create/components/CreatePostButton";
import { Metadata } from "next";
import { usePostSchema } from "@schema";

export const metadata: Metadata = {
  title: "Criar Postagem",
  robots: {
    index: false,
  },
};

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: 1400,
  height: "90vh",
  maxHeight: 1000,
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

  const schema = usePostSchema({});

  return (
    <Modal open onClose={handleClose}>
      <Box sx={style}>
        <PostForm
          ActionsButton={<CreatePostButton schema={schema} />}
          schema={schema}
        />
      </Box>
    </Modal>
  );
}

// TODO: VALIDAR SE O INPUIT ESTA FOCADO E SE FOR FECHAR, VALIDAR SE O QUER SALVAR RASCUNHO OU APAGAR. FEATURE
