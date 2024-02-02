import { useState } from "react";
import { TableCell, TableRow } from "@mui/material";

import { Button, SelectOption } from "@components";
import {
  PostCommentReport,
  ReportStatus,
  useUpdatePostCommentReport,
} from "@domain";
import { eventUtils } from "@utils";

interface Props {
  report: PostCommentReport;
}
export function CommentReportTableCollapsedRow({ report }: Props) {
  const [status, setStatus] = useState<string | undefined>(report.status);

  const { loading, mutate } = useUpdatePostCommentReport();

  async function updateReport() {
    if (status && report.status !== status) {
      await mutate(
        {
          id: report.id,
          status: status as ReportStatus,
        },
        () => {
          eventUtils.emit("refresh-data");
        }
      );
    }
  }

  return (
    <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
      <TableCell align="left">{report.message}</TableCell>
      <TableCell align="right">
        <SelectOption
          options={[
            {
              label: "OPEN",
              value: "OPEN",
            },
            {
              label: "APPROVED",
              value: "APPROVED",
            },
            {
              label: "REJECTED",
              value: "REJECTED",
            },
          ]}
          setValue={setStatus}
          value={status}
        />
      </TableCell>
      <TableCell>
        <Button
          placeholder="Atualizar"
          onClick={updateReport}
          loading={loading}
        />
      </TableCell>
    </TableRow>
  );
}
