"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PostComment, useAuth, usePostComment } from "@domain";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { CommentReportModal } from "./CommentReportModal";

interface Props {
  commentId: number;
  userId: number;
  comment: PostComment;
  postId: number;
}

export function CommentOptions({ commentId, userId, comment, postId }: Props) {
  const { user } = useAuth();
  const { setCommentState, destroyComment, loading, reportComment } =
    usePostComment();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openOptions = Boolean(anchorEl);

  const [openReportModal, setReportModal] = useState<boolean>(false);

  const handleOpenReportModal = () => {
    handleCloseOptions();
    setReportModal(true);
  };
  const handleCloseReportModal = () => {
    setReportModal(false);
  };

  const handleOpenOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseOptions = () => {
    setAnchorEl(null);
  };

  function handleEdit() {
    setCommentState((prev) => ({
      ...prev,
      action: "edit",
      comment,
    }));
    handleCloseOptions();
  }

  function handleDelete() {
    destroyComment({
      commentId,
      postId,
    });

    handleCloseOptions();
  }

  console.log(anchorEl);

  return (
    <>
      <button
        aria-controls={openOptions ? `OptionsComment-${commentId}` : undefined}
        aria-haspopup="true"
        aria-expanded={openOptions ? "true" : undefined}
        onClick={handleOpenOptions}
        id={`commentToggle-${commentId}`}
        className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
        <span className="sr-only">...</span>
      </button>
      <Menu
        id={`OptionsComment-${commentId}`}
        anchorEl={anchorEl}
        open={openOptions}
        onClose={handleCloseOptions}
        MenuListProps={{
          id: `commentToggle-${commentId}`,
        }}
        //className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        {user && user.id === userId && (
          <>
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem
              onClick={handleDelete}
              className="flex items-center justify-center"
            >
              Remove
              {loading && <CircularProgress size={15} className="ml-2" />}
            </MenuItem>
          </>
        )}
        {(!user || user.id !== userId) && (
          <MenuItem onClick={handleOpenReportModal}>Report</MenuItem>
        )}
      </Menu>
      <CommentReportModal
        commentId={commentId}
        postId={postId}
        open={openReportModal}
        handleClose={handleCloseReportModal}
      />
    </>
  );
}
{
  /* <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownMenuIconHorizontalButton"
        >
          <li>
            <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Edit
            </button>
          </li>
          <li>
            <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Remove
            </button>
          </li>
          <li>
            <button className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Report
            </button>
          </li>
        </ul> */
}
