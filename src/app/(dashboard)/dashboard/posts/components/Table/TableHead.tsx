import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHeadMUI from "@mui/material/TableHead";

export function TableHead() {
  return (
    <TableHeadMUI>
      <TableRow>
        <TableCell />
        <TableCell>Título</TableCell>

        <TableCell align="right">Visualizações</TableCell>
        <TableCell align="right">Data</TableCell>
        <TableCell align="right">Likes</TableCell>
        <TableCell align="right">UnLikes</TableCell>
        <TableCell align="right">Rascunho</TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
    </TableHeadMUI>
  );
}
