import { Metadata } from "next";
import { PageParams } from "@types";

import { Update } from "../../components/Screens/Update";

export const metadata: Metadata = {
  title: "Atualizar Categoria",
  robots: {
    index: false,
  },
};

export default function CreatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;
  return <Update categoryId={categoryId} modal />;
}
