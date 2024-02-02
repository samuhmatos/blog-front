"use client";
import { Table } from "@components";
import { PostCommentReport } from "@domain";
import MUITableBody from "@mui/material/TableBody";
import { CommentReportTableCollapsedRow } from "./components/CommentReportTableCollapsedRow";

interface Props {
  commentId: number;
  reports: PostCommentReport[];
}

export function CommentReportTableRowCollapsed({ commentId, reports }: Props) {
  return (
    <Table
      header={{ labels: ["Report", "Status", null], stickyHeader: false }}
      height={250}
      TableBody={
        <MUITableBody>
          {reports.map((report) => (
            <CommentReportTableCollapsedRow report={report} key={report.id} />
          ))}
        </MUITableBody>
      }
    />
  );
}
