import { Metadata } from "next";import { PageParams } from "@types";

import { UpdatePostScreen } from "../../components/Screens/UpdatePostScreen";

export const metadata: Metadata = {
  title: "Atualizar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const postId = props.searchParams.id;

  return <UpdatePostScreen postId={postId} modal />;
}
