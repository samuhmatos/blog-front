"use client";import { useState, useEffect, ChangeEvent } from "react";

import TableMUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";

import { Row } from "./Row";
import { TableHead } from "./TableHead";
import { useFeedList } from "@domain";

export function Table() {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const { list, total, refetch } = useFeedList({
    page: page + 1,
    per_page: rowsPerPage,
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
  }, [page, rowsPerPage]);

  return (
    <div className="w-full my-5">
      <Paper sx={{ width: "100%" }}>
        <TableContainer component={Paper} sx={{ height: 440 }}>
          <TableMUI stickyHeader aria-label="collapsible sticky table">
            <TableHead />
            <TableBody>
              {list.map((post) => (
                <Row post={post} key={post.id} />
              ))}
            </TableBody>
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
        />
      </Paper>
    </div>
  );
}
