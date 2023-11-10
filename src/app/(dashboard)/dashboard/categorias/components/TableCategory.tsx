"use client";
import { Table } from "@components";
import { useEffect, useState } from "react";
import { TableBody } from "./TableBody";
import { usePostCategoryList } from "@domain";
import { eventUtils } from "@utils";

const tableLabels = [null, "Nome", "Data", "Posts", null, null];

export function TableCategory() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isTrash, setIsTrash] = useState<boolean>(false);

  const { list, totalMeta, refresh } = usePostCategoryList({
    page: page + 1,
    per_page: rowsPerPage,
  });

  useEffect(() => {
    eventUtils.on("close-modal", () => {
      refresh();
    });

    return eventUtils.remove("close-modal", () => {
      refresh();
    });
  }, [page, rowsPerPage, isTrash]);

  return (
    <Table
      headerLabels={tableLabels}
      count={totalMeta}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      TableBody={
        <TableBody isTrash={isTrash} categories={list} refetch={refresh} />
      }
    />
  );
}
