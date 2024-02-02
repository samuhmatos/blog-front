"use client";
import { ChangeEvent, useEffect, useState } from "react";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

import { Checkbox, Table } from "@components";
import { useUserList } from "@domain";
import { eventUtils } from "@utils";
import { TableBody } from "./TableBody";

export function TableUsers() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isTrash, setIsTrash] = useState<boolean>(false);

  const { list, totalMeta, refresh } = useUserList({
    page: page + 1,
    per_page: rowsPerPage,
    is_trash: isTrash,
  });

  useEffect(() => {
    refresh();
  }, [page, rowsPerPage, isTrash]);

  useEffect(() => {
    eventUtils.on("close-modal", () => {
      refresh();
    });

    return eventUtils.remove("close-modal", () => {});
  }, []);

  const handleShowTrash = (e: ChangeEvent<HTMLInputElement>) => {
    var checked = e.target.checked;

    setIsTrash(checked);
    setPage(0);
    setRowsPerPage(10);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <Table
      header={{
        labels: [
          null,
          "Nome",
          "Usuário",
          "email",
          "Administrador",
          "Newsletter",
          null,
          null,
        ],
      }}
      pagination={{
        count: totalMeta,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
        FooterActionsComponents: (subprops) => (
          <>
            <Checkbox
              onChange={handleShowTrash}
              id="trashCheckBox"
              checked={isTrash}
              label="Exibir lixeira"
              className={subprops.className}
            />

            <TablePaginationActions
              count={totalMeta}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              showLastButton
              showFirstButton
              page={page}
              getItemAriaLabel={() => ""}
              className="flex"
            />
          </>
        ),
      }}
      TableBody={<TableBody isTrash={isTrash} users={list} refetch={refresh} />}
    />
  );
}
