import { TablePagination as MUITablePagination } from "@mui/material";import { TablePaginationActionsProps } from "@mui/material/TablePagination/TablePaginationActions";
import { ChangeEvent, Dispatch } from "react";

export interface TablePaginationProps {
  count: number;
  rowsPerPage: number;
  page: number;
  setPage: Dispatch<number>;
  setRowsPerPage: Dispatch<number>;
  ActionsComponent?: React.ElementType<TablePaginationActionsProps>;
}

export function TablePagination({
  count,
  rowsPerPage,
  page,
  setRowsPerPage,
  setPage,
  ActionsComponent,
}: TablePaginationProps) {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value) || 10);
    setPage(0);
  };

  return (
    <MUITablePagination
      rowsPerPageOptions={[5, 10, 25, 100]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      ActionsComponent={ActionsComponent}
    />
  );
}
