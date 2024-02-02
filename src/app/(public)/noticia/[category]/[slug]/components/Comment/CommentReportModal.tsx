"use client";
import { useCreatePostCommentReport } from "@domain";
import { Button, FormTextAreaInput, Modal } from "@components";
import { useCommentForm } from "./useCommentForm";
import { CommentSchema } from "./commentSchema";

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
  const { loading, mutate: reportComment } = useCreatePostCommentReport();
  const { control, handleSubmit, formState, reset } = useCommentForm();

  function submitReport({ message }: CommentSchema) {
    reportComment({ postId, commentId, message }, handleCloseReport);
  }

  function handleCloseReport() {
    reset();
    handleClose();
  }

  return (
    <Modal isOpen={open} onClose={handleCloseReport} className="max-w-lg">
      <form onSubmit={handleSubmit(submitReport)}>
        <h2 className="text-xl font-semibold text-center mb-3">
          Qual o seu report?
        </h2>

        <FormTextAreaInput
          control={control}
          name="message"
          placeholder="Deixe seu report para esse comentário..."
          counter
        />

        <div className="flex gap-3 mt-4">
          <Button
            placeholder="Reportar"
            loading={loading}
            disabled={!formState.isValid}
            loadingPosition="end"
            type="submit"
          />
          <Button
            onClick={handleCloseReport}
            placeholder="Cancelar"
            paleteColor="danger"
            disabled={loading}
          />
        </div>
      </form>
    </Modal>
  );
}
