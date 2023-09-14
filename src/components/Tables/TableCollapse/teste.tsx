"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import TableMUI from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TablePagination } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <TableMUI size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TableMUI>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("1 Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("2 Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("3 Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("4 Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("5 Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("6 Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("7 Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("8 Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("9 Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("10 Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("11 Samuel yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("12 Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("13 Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("14 Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("15 Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  createData("16 Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("17 Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("18 Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("19 Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("20 Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export function TableCollapse() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rowsPaginated = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="w-full my-5">
      <Paper sx={{ width: "100%" }}>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
          <TableMUI stickyHeader aria-label="collapsible sticky table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsPaginated.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </TableMUI>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
