"use client";
import { useRef, useState, useEffect, FormEvent } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { usePostComment } from "@domain";
import LoadingButton from "@mui/lab/LoadingButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: () => void;
  commentId: number;
  postId: number;
}

export function CommentReportModal({
  commentId,
  open,
  postId,
  handleClose,
}: Props) {
  const { reportComment, loading } = usePostComment();

  const [text, setText] = useState<string>("");
  const reportRef = useRef<HTMLDivElement | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (reportRef.current?.classList.contains("border-red-700")) {
      reportRef.current?.classList.remove("border-red-700");
      reportRef.current?.classList.add("border-gray-200");
    }

    if (text.length <= 255) {
      reportComment(postId, commentId, text, handleCloseReport);
    } else {
      reportRef.current?.classList.remove("border-gray-200");
      reportRef.current?.classList.add("border-red-700");
    }
  }

  function handleCloseReport() {
    setText("");
    handleClose();
  }

  useEffect(() => {
    if (text.length > 255) {
      reportRef.current?.classList.remove("border-gray-200");
      reportRef.current?.classList.add("border-red-700");
      setDisabled(true);
    } else {
      if (reportRef.current?.classList.contains("border-red-700")) {
        reportRef.current?.classList.remove("border-red-700");
        reportRef.current?.classList.add("border-gray-200");
      }
      setDisabled(false);
    }
  }, [text]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="Reportar comentário"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit}>
          <div
            className="transition-all py-2 px-4 mb-1 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
            id="commentField"
            ref={reportRef}
          >
            <label htmlFor="comment" className="sr-only">
              Seu report
            </label>
            <textarea
              id="comment"
              rows={6}
              className={`px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800`}
              placeholder="Deixe seu report para esse comentário..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div
            className={`${
              text.length > 255 ? "text-red-700" : "text-gray-500"
            }  text-sm text-right`}
          >
            <span>{text.length}/255</span>
          </div>
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            type="submit"
            className="py-2.5 px-4 text-xs font-medium text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 disabled:bg-primary-800 disabled:text-white"
            disabled={disabled}
          >
            <span className={`${loading ? "mr-3" : "mr-0"}`}>Reportar</span>
          </LoadingButton>
          <button
            onClick={handleCloseReport}
            className="py-2.5 px-4 text-xs font-medium text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-red-800 ml-4 uppercase"
          >
            Cancelar
          </button>
        </form>
      </Box>
    </Modal>
  );
}
