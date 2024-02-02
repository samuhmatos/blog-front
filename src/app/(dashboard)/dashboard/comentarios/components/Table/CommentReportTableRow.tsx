"use client";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { PostComment } from "@domain";
import { Button, Icon, TableRowCollapse } from "@components";
import { useState } from "react";
import { CommentReportTableRowCollapsed } from "./CommentReportTableRowCollapsed";

interface Props {
  comment: PostComment;
}
export function CommentReportTableRow({ comment }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <Icon name="ArrowUp" /> : <Icon name="ArrowDown" />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {comment.comment}
        </TableCell>
        <TableCell align="right">
          <Button
            placeholder={comment.reports?.length || 0}
            paleteColor="secondary"
          />
        </TableCell>
        <TableCell align="right">
          <Button
            placeholder={
              comment.reports?.filter((report) => report.status === "OPEN")
                .length || 0
            }
            paleteColor="warning"
          />
        </TableCell>
        <TableCell align="right">
          <Button
            placeholder={
              comment.reports?.filter((report) => report.status === "APPROVED")
                .length || 0
            }
            paleteColor="secondary"
          />
        </TableCell>
        <TableCell align="right">
          <Button
            placeholder={
              comment.reports?.filter((report) => report.status === "REJECTED")
                .length || 0
            }
            paleteColor="danger"
          />
        </TableCell>
      </TableRow>

      <TableRowCollapse
        open={open}
        collapsed={
          <CommentReportTableRowCollapsed
            commentId={comment.id}
            reports={comment.reports || []}
          />
        }
      />
    </>
  );
}
