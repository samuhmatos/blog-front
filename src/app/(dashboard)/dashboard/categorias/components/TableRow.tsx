"use client";
import { Category, usePostCategoryRemove } from "@domain";

import { Fragment, useState } from "react";
import MUITableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Icon, Button } from "@components";
import TableDetailsCollapsed from "./TableDetailsCollapsed";
import { useRouter } from "next/navigation";
import { linkUtils } from "@utils";

interface RowsType {
  category: Category;
  refetch: () => void;
  isTrash: boolean;
}

export function TableRow({ category, refetch, isTrash }: RowsType) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { loading: loadingRemove, remove } = usePostCategoryRemove();

  function handleRemovePost() {
    remove(category.id, () => {
      refetch();
    });
  }

  // function handleRestorePost() {
  //   restore(post.id, () => {
  //     refetch();
  //   });
  // }

  // function handleChangeIsDraft(e: ChangeEvent<HTMLInputElement>) {
  //   let checked = e.target.checked;

  //   update({
  //     formData: {
  //       title: post.title,
  //       subTitle: post.subTitle,
  //       content: post.content,
  //       category: post.categoryId.toString(),
  //       isDraft: checked,
  //     },
  //     postId: post.id,
  //     reset() {
  //       setIsDraft(checked);
  //       refetch();
  //     },
  //   });
  // }

  return (
    <Fragment>
      <MUITableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
          {category.name}
        </TableCell>
        <TableCell align="right">{category.createdAtFormatted}</TableCell>
        <TableCell align="right">{category.postsCount}</TableCell>

        <TableCell align="right">
          <Button
            placeholder={<Icon name="Edit" size="text-base" />}
            onClick={() =>
              router.push(
                linkUtils.linkDashboard(`/categorias/update?id=${category.id}`)
              )
            }
            paleteColor="warning"
            disabled={isTrash}
          />
        </TableCell>
        <TableCell align="right">
          {isTrash ? (
            <Button
              placeholder="Restaurar"
              paleteColor="warning"
              // onClick={handleRestorePost}
              // loading={loadingRestore}
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
      </MUITableRow>
      <MUITableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detalhes
              </Typography>
              <TableDetailsCollapsed description={category.description} />
            </Box>
          </Collapse>
        </TableCell>
      </MUITableRow>
    </Fragment>
  );
}

//TODO: FILTRAR CATEGORIAS APAGADAS, E RESTAURAR
