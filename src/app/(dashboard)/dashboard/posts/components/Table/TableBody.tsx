import MUITableBody from "@mui/material/TableBody";
import { PostWithDetails } from "@domain";
import { Row } from "./Row";

interface Props {
  posts: PostWithDetails[];
  isTrash: boolean;
  refetch: () => void;
}
export function TableBody({ posts, isTrash, refetch }: Props) {
  return (
    <MUITableBody>
      {posts.map((post) => (
        <Row key={post.id} post={post} isTrash={isTrash} refetch={refetch} />
      ))}
    </MUITableBody>
  );
}
