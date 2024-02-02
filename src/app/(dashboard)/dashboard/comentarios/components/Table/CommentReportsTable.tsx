"use client";
import { useEffect, useState } from "react";

import { Table } from "@components";
import { usePostCommentReportList } from "@domain";
import { CommentReportTableBody } from "./CommentReportTableBody";
import { eventUtils } from "@utils";

export function CommentReportsTable() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const { list, totalPage, refresh } = usePostCommentReportList({
    page,
    perPage: rowsPerPage,
  });

  useEffect(() => {
    eventUtils.on("refresh-data", () => refresh());

    return () => eventUtils.remove("refresh-data", () => refresh());
  }, []);

  return (
    <Table
      pagination={{
        count: totalPage,
        setPage,
        setRowsPerPage,
        page,
        rowsPerPage,
      }}
      header={{
        labels: [
          null,
          "Comentário",
          "Qtd. Reports",
          "Qtd. OPEN",
          "Qtd. APPROVED",
          "Qtd. REJECTED",
        ],
      }}
      TableBody={<CommentReportTableBody comments={list} />}
    />
  );
}
