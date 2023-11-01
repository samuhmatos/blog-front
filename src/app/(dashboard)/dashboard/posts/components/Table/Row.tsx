"use client";
import {
  PostWithDetails,
  useRemovePost,
  useRestorePost,
  useUpdatePost,
} from "@domain";
import { ChangeEvent, Fragment, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox, Icon, Button } from "@components";
import { TableDetailsCollapsed } from "./TableDetailsCollapsed";
import { CircularProgress } from "@mui/material";
import { changeRoute } from "nextjs-progressloader";

interface RowsType {
  post: PostWithDetails;
  refetch: () => void;
  isTrash: boolean;
}

export function Row({ post, refetch, isTrash }: RowsType) {
  const [open, setOpen] = useState(false);
  const [isDraft, setIsDraft] = useState<boolean>(post.isDraft);

  const { loading: loadingRemove, remove } = useRemovePost();
  const { loading: loadingUpdate, update } = useUpdatePost();
  const { loading: loadingRestore, restore } = useRestorePost();

  function handleRemovePost() {
    remove(post.id, () => {
      refetch();
    });
  }

  function handleRestorePost() {
    restore(post.id, () => {
      refetch();
    });
  }

  function handleChangeIsDraft(e: ChangeEvent<HTMLInputElement>) {
    let checked = e.target.checked;

    update({
      formData: {
        title: post.title,
        subTitle: post.subTitle,
        content: post.content,
        category: post.categoryId.toString(),
        isDraft: checked,
      },
      postId: post.id,
      reset() {
        setIsDraft(checked);
        refetch();
      },
    });
  }

  function handleOpenEditModal() {
    changeRoute("post.update");
  }

  return (
    <Fragment>
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
          {post.title}
        </TableCell>
        <TableCell align="right">{post.views}</TableCell>
        <TableCell align="right">{post.createdAtFormatted}</TableCell>
        <TableCell align="right">{post.likeCount || 0}</TableCell>
        <TableCell align="right">{post.unlikeCount || 0}</TableCell>
        <TableCell align="center">
          {loadingUpdate ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            <Checkbox
              checked={isDraft}
              onChange={handleChangeIsDraft}
              className="mx-auto"
              disabled={isTrash}
            />
          )}
        </TableCell>
        <TableCell align="right">
          <Button
            placeholder="Editar"
            onClick={handleOpenEditModal}
            paleteColor="warning"
            disabled={isTrash}
          />
        </TableCell>
        <TableCell align="right">
          {isTrash ? (
            <Button
              placeholder="Restaurar"
              paleteColor="warning"
              onClick={handleRestorePost}
              loading={loadingRestore}
            />
          ) : (
            <Button
              placeholder={<Icon name="Trash" size="text-base" />}
              paleteColor="danger"
              loadingPosition="center"
              onClick={handleRemovePost}
              loading={loadingRemove}
            />
          )}
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
