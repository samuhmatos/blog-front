import { Metadata } from "next";
import { Create } from "../../components/Screens/Create";

export const metadata: Metadata = {
  title: "Criar Categoria",
  robots: {
    index: false,
  },
};

export default function CreatePostPage() {
  return <Create modal />;
}
