import MUITableBody from "@mui/material/TableBody";
import { PostComment } from "@domain";
import { CommentReportTableRow } from "./CommentReportTableRow";

interface Props {
  comments: PostComment[];
}
export function CommentReportTableBody({ comments }: Props) {
  return (
    <MUITableBody>
      {comments.map((comment) => (
        <CommentReportTableRow key={comment.id} comment={comment} />
      ))}
    </MUITableBody>
  );
}
