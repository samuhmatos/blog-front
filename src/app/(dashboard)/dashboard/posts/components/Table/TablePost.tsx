"use client";import { Checkbox, Table } from "@components";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { ChangeEvent, useEffect, useState } from "react";
import { useFeedList } from "@domain";
import { TableBody } from "./TableBody";
import { eventUtils } from "@utils";

const tableLabels = [
  null,
  "Título",
  "Visualizações",
  "Data",
  "Likes",
  "Unlikes",
  "Rascunho",
  null,
  null,
];

export function TablePost() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isDraft, setIsDraft] = useState<boolean>(false);
  const [isTrash, setIsTrash] = useState<boolean>(false);

  const { list, total, refetch } = useFeedList({
    page: page + 1,
    per_page: rowsPerPage,
    is_draft: isDraft,
    is_trash: isTrash,
  });

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, isDraft, isTrash]);

  useEffect(() => {
    eventUtils.on("close-modal", () => {
      refetch();
    });

    return eventUtils.remove("close-modal", () => {
      refetch();
    });
  }, []);

  const handleShowDraft = (e: ChangeEvent<HTMLInputElement>) => {
    var checked = e.target.checked;
    setStates(false, checked);
  };

  const handleShowTrash = (e: ChangeEvent<HTMLInputElement>) => {
    var checked = e.target.checked;
    setStates(checked, false);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  function setStates(trash: boolean, draft: boolean) {
    setIsDraft(draft);
    setIsTrash(trash);
    setPage(0);
    setRowsPerPage(10);
  }

  return (
    <Table
      headerLabels={tableLabels}
      count={total}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={setPage}
      setRowsPerPage={setRowsPerPage}
      TableBody={<TableBody isTrash={isTrash} posts={list} refetch={refetch} />}
      FooterActionsComponents={(subprops) => (
        <>
          <Checkbox
            onChange={handleShowDraft}
            id="draftCheckBox"
            checked={isDraft}
            label="Exibir Rascunhos"
            className={subprops.className}
          />

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
