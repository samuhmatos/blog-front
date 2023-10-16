import MUITableBody from "@mui/material/TableBody";
import { Category } from "@domain";
import { TableRow } from "./TableRow";

interface Props {
  categories: Category[];
  isTrash: boolean;
  refetch: () => void;
}
export function TableBody({ categories, isTrash, refetch }: Props) {
  return (
    <MUITableBody>
      {categories.map((category) => (
        <TableRow
          key={category.id}
          category={category}
          isTrash={isTrash}
          refetch={refetch}
        />
      ))}
    </MUITableBody>
  );
}
