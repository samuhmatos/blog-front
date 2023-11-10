import ModalMUI from "@mui/material/Modal";import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}
export function Modal({ isOpen, onClose, className, children }: Props) {
  return (
    <ModalMUI open={isOpen} onClose={onClose}>
      <div
        className={twMerge(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm shadow-md p-6 h-auto max-h-[90vh] bg-white rounded-lg overflow-y-auto",
          className
        )}
      >
        {children}
      </div>
    </ModalMUI>
  );
}
