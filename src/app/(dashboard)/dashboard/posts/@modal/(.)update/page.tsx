"use client";
import { Box, Modal, SxProps, Theme } from "@mui/material";
import { PostForm } from "../../components";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetPost } from "@domain";
import { UpdatePostButton } from "../../update/components/UpdatePostButton";
import { PageParams } from "@types";
import { Metadata } from "next";
import { usePostSchema } from "@schema";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
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

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  const { post, getOne } = useGetPost();

  const router = useRouter();
  const schema = usePostSchema({ editMode: true });

  useEffect(() => {
    if (postId) {
      getOne(postId.toString());
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
        <PostForm
          ActionsButton={
            <UpdatePostButton
              schema={schema}
              postId={postId}
              isDraft={post?.isDraft ? post.isDraft : false}
            />
          }
          schema={schema}
          initialData={post}
        />
      </Box>
    </Modal>
  );
}

// TODO: VALIDAR SE O INPUIT ESTA FOCADO E SE FOR FECHAR, VALIDAR SE O QUER SALVAR RASCUNHO OU APAGAR. FEATURE
