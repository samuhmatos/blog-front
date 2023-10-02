"use client";
import { useState, useEffect, ChangeEvent, Suspense } from "react";

import TableMUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";

import { Row } from "./Row";
import { TableHead } from "./TableHead";
import { useFeedList } from "@domain";
import { Checkbox } from "@components";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

export function Table() {
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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    refetch();
  }, [page, rowsPerPage, isDraft, isTrash]);

  const handleShowDraft = (e: ChangeEvent<HTMLInputElement>) => {
    var checked = e.target.checked;
    setStates(false, checked);
  };

  const handleShowTrash = (e: ChangeEvent<HTMLInputElement>) => {
    var checked = e.target.checked;
    setStates(checked, false);
  };

  function setStates(trash: boolean, draft: boolean) {
    setIsDraft(draft);
    setIsTrash(trash);
    setPage(0);
    setRowsPerPage(10);
  }

  return (
    <div className="w-full my-5">
      <Paper sx={{ width: "100%" }}>
        <TableContainer component={Paper} sx={{ height: 440 }}>
          <TableMUI stickyHeader aria-label="collapsible sticky table">
            <TableHead />
            <Suspense fallback={<h1>Carregando</h1>}>
              <TableBody>
                {list.map((post) => (
                  <Row
                    post={post}
                    key={post.id}
                    refetch={refetch}
                    isTrash={isTrash}
                  />
                ))}
              </TableBody>
            </Suspense>
          </TableMUI>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={(subprops) => {
            return (
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
            );
          }}
        />
      </Paper>
    </div>
  );
}
