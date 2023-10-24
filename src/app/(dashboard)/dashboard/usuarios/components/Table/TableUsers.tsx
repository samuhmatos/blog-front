"use client";import { Checkbox, Table } from "@components";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { ChangeEvent, useEffect, useState } from "react";
import { useUserList } from "@domain";
import { TableBody } from "./TableBody";
import { eventUtils } from "@utils";

const tableLabels = [
  null,
  "Nome",
  "Usuário",
  "email",
  "Administrador",
  "Newsletter",
  null,
  null,
];

export function TableUsers() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isTrash, setIsTrash] = useState<boolean>(false);

  const { list, total, refetch } = useUserList({
    page: page + 1,
    per_page: rowsPerPage,
    is_trash: isTrash,
  });

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, isTrash]);

  useEffect(() => {
    eventUtils.on("close-modal", () => {
      console.log("close-modal");
      refetch();
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
      headerLabels={tableLabels}
      count={total}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      TableBody={<TableBody isTrash={isTrash} users={list} refetch={refetch} />}
      FooterActionsComponents={(subprops) => (
        <>
          <Checkbox
            onChange={handleShowTrash}
            id="trashCheckBox"
            checked={isTrash}
            label="Exibir lixeira"
            className={subprops.className}
          />

          <TablePaginationActions
            count={total}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            showLastButton
            showFirstButton
            page={page}
            getItemAriaLabel={() => ""}
            className="flex"
          />
        </>
      )}
    />
  );
}
