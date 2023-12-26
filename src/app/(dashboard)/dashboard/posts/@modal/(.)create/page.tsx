import { Metadata } from "next";
import { CreatePostScreen } from "../../components/Screens/CreatePostScreen";

export const metadata: Metadata = {
  title: "Criar Postagem",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  return <CreatePostScreen modal />;
}
