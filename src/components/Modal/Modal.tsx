import { Box } from "@mui/material";
import ModalMUI from "@mui/material/Modal";
import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}
export function Modal({ isOpen, onClose, className, children }: Props) {
  return (
    <ModalMUI open={isOpen} onClose={onClose}>
      <Box
        className={twMerge(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md shadow-xl p-6 h-4/5 bg-gray-50 rounded",
          className
        )}
      >
        {children}
      </Box>
    </ModalMUI>
  );
}
