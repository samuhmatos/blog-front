"use client";
import { useEffect, useState } from "react";

import { Table } from "@components";
import { usePostCategoryList } from "@domain";
import { eventUtils } from "@utils";
import { TableBody } from "./TableBody";

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
      header={{ labels: [null, "Nome", "Data", "Posts", null, null] }}
      pagination={{
        count: totalMeta,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
      }}
      TableBody={
        <TableBody isTrash={isTrash} categories={list} refetch={refresh} />
      }
    />
  );
}
