import { Metadata } from "next";
import { PageParams } from "@types";
import { Update } from "../components/Screens/Update";

export const metadata: Metadata = {
  title: "Atualizar Categorias",
  robots: {
    index: false,
  },
};

export default function UpdatePostPage(props: PageParams<{ id: number }>) {
  const categoryId = props.searchParams.id;

  return <Update categoryId={categoryId} />;
}
