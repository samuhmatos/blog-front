"use client";import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { TableHead } from "./components/TableHead";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import {
  TablePagination,
  TablePaginationProps,
} from "./components/TablePagination";

interface Props extends Omit<TablePaginationProps, "ActionsComponent"> {
  headerLabels: (string | null)[];
  TableBody: React.ReactNode;
  FooterActionsComponents?: React.ElementType<TablePaginationActionsProps>;
}

export function Table({
  headerLabels,
  FooterActionsComponents,
  TableBody,
  count,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
}: Props) {
  return (
    <div className="w-full my-5">
      <Paper sx={{ width: "100%" }}>
        <TableContainer component={Paper} sx={{ height: 440 }}>
          <TableMUI stickyHeader>
            <TableHead labels={headerLabels} />
            {TableBody}
          </TableMUI>
        </TableContainer>

        <TablePagination
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          ActionsComponent={FooterActionsComponents}
        />
      </Paper>
    </div>
  );
}
