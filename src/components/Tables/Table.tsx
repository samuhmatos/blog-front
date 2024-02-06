"use client";
import TableMUI from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";

import { TableHead } from "./components/TableHead";
import {
  TablePagination,
  TablePaginationProps,
} from "./components/TablePagination";

interface Pagination extends Omit<TablePaginationProps, "ActionsComponent"> {
  ActionsComponent?: React.ElementType<TablePaginationActionsProps>;
}

interface Header {
  labels: (string | null)[];
  stickyHeader?: boolean;
}
interface TableProps {
  TableBody: React.ReactNode;
  pagination?: Pagination;
  header?: Header;
  height?: number;
}

export function Table({
  header,
  TableBody,
  pagination,
  height = 400,
}: TableProps) {
  return (
    <div className="w-full my-5">
      <Paper sx={{ width: "100%" }}>
        {header && (
          <TableContainer component={Paper} sx={{ height }}>
            <TableMUI
              stickyHeader={
                typeof header.stickyHeader !== "undefined"
                  ? header.stickyHeader
                  : true
              }
            >
              <TableHead labels={header.labels} />
              {TableBody}
            </TableMUI>
          </TableContainer>
        )}

        {pagination && <TablePagination {...pagination} />}
      </Paper>
    </div>
  );
}
