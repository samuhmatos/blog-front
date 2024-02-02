import { Box, Collapse, TableCell, TableRow, Typography } from "@mui/material";
interface Props {
  open: boolean;
  collapsed: React.ReactNode;
  title?: string;
}
export function TableRowCollapse({ open = false, collapsed, title }: Props) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            {title && (
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                align="center"
              >
                {title}
              </Typography>
            )}
            {collapsed}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
