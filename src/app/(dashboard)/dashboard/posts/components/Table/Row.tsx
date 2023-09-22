"use client";
import { PostWithDetails } from "@domain";
import { Fragment, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@components";
import { FaTrashCan } from "react-icons/fa6";
import { TableDetailsCollapsed } from "./TableDetailsCollapsed";

interface RowsType {
  post: PostWithDetails;
}

export function Row({ post }: RowsType) {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {post.title}
        </TableCell>
        <TableCell align="right">{post.views}</TableCell>
        <TableCell align="right">{post.createdAtFormatted}</TableCell>
        <TableCell align="right">{post.likeCount || 0}</TableCell>
        <TableCell align="right">{post.unlikeCount || 0}</TableCell>
        <TableCell align="right">
          <Button placeholder="Editar" />
        </TableCell>
        <TableCell align="right">
          <button
            // onClick={handleCancelAction}
            className="py-2.5 px-4 text-xs font-medium text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-red-800 ml-4 uppercase"
          >
            <FaTrashCan />
          </button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <TableDetailsCollapsed
                category={post.category}
                content={post.content}
                subTitle={post.subTitle}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  );
}

// TODO: EDIT AND REMOVE POST
