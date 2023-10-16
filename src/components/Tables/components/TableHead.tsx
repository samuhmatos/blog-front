import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableHeadMUI from "@mui/material/TableHead";

interface Props {
  labels: (string | null)[];
}

export function TableHead({ labels }: Props) {
  return (
    <>
      <TableHeadMUI>
        <TableRow>
          {labels.map((label, index) => (
            <TableCell key={index}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHeadMUI>
    </>
  );
}
