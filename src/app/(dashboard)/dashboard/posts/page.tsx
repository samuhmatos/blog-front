"use client";import { Table, PostNavigateButton } from "./components";
import { TablePost } from "./components/Table/TablePost";
export default function DashPostScreen(props: unknown) {
  return (
    <>
      <PostNavigateButton />

      <TablePost />
    </>
  );
}
