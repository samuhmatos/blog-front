"use client";
import { ChangeEvent, useEffect, useState } from "react";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

import { Checkbox, Table } from "@components";
import { useFeedList } from "@domain";
import { eventUtils } from "@utils";

import { TableBody } from "./TableBody";

export function TablePost() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [isDraft, setIsDraft] = useState<boolean>(false);
  const [isTrash, setIsTrash] = useState<boolean>(false);

  const { list, refresh, totalMeta } = useFeedList({
    page: page + 1,
    per_page: rowsPerPage,
    is_draft: isDraft,
    is_trash: isTrash,
  });

  useEffect(() => {
    eventUtils.on("close-modal", () => {
      refresh();
    });

    return eventUtils.remove("close-modal", () => {
      refresh();
    });
  }, [page, rowsPerPage, isDraft, isTrash]);

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
      header={{
        labels: [
          null,
          "Título",
          "Visualizações",
          "Data",
          "Likes",
          "Unlikes",
          "Rascunho",
          null,
          null,
        ],
      }}
      pagination={{
        count: totalMeta,
        page,
        rowsPerPage,
        setRowsPerPage,
        setPage,
        FooterActionsComponents: (props) => (
          <>
            <Checkbox
              onChange={handleShowDraft}
              id="draftCheckBox"
              checked={isDraft}
              label="Exibir Rascunhos"
              className={props.className}
            />

            <Checkbox
              onChange={handleShowTrash}
              id="trashCheckBox"
              checked={isTrash}
              label="Exibir lixeira"
              className={props.className}
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
      TableBody={<TableBody isTrash={isTrash} posts={list} refetch={refresh} />}
    />
  );
}
