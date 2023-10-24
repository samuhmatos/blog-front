import MUITableBody from "@mui/material/TableBody";
import { User, UserPagination } from "@domain";
import { Row } from "./Row";

interface Props {
  users: UserPagination[];
  isTrash: boolean;
  refetch: () => void;
}
export function TableBody({ users, isTrash, refetch }: Props) {
  return (
    <MUITableBody>
      {users.map((user) => (
        <Row key={user.id} user={user} isTrash={isTrash} refetch={refetch} />
      ))}
    </MUITableBody>
  );
}
