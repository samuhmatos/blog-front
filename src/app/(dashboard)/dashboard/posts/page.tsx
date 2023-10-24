import { Metadata } from "next";import { Table, PostNavigateButton } from "./components";
import { TablePost } from "./components/Table/TablePost";

export const metadata: Metadata = {
  title: "Postagens",
  robots: {
    index: false,
  },
};

export default function DashPostScreen(props: unknown) {
  return (
    <>
      <PostNavigateButton />

      <TablePost />
    </>
  );
}
