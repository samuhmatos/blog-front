"use client";
import { UserPagination, useUserRemove, useUserRestore } from "@domain";
import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Icon, Button } from "@components";
import { TableUserDetailsCollapsed } from "./TableUserCollapsed";
import { changeRoute } from "nextjs-progressloader";

interface RowsType {
  user: UserPagination;
  refetch: () => void;
  isTrash: boolean;
}

export function Row({ user, refetch, isTrash }: RowsType) {
  const [open, setOpen] = useState(false);

  const { loading: loadingRemove, remove } = useUserRemove();
  const { loading: loadingRestore, restore } = useUserRestore();

  function handleRemovePost() {
    remove(user.id, () => {
      refetch();
    });
  }

  function handleRestoreUser() {
    restore(user.id, () => {
      refetch();
    });
  }

  function handleOpenEditModal() {
    changeRoute("user.update", {
      queryStrings: [{ key: "id", value: user.id }],
    });
  }

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
          {user.name}
        </TableCell>
        <TableCell align="right">{user.username}</TableCell>
        <TableCell align="right">{user.email}</TableCell>
        <TableCell align="right">{user.isAdmin ? "Sim" : "Não"}</TableCell>
        <TableCell align="right">{user.newsletter ? "Sim" : "Não"}</TableCell>
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
              onClick={handleRestoreUser}
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
              <TableUserDetailsCollapsed
                description={user.description}
                imageURL={user.imageURL}
                createdAtFormatted={user.createdAtFormatted}
              />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
