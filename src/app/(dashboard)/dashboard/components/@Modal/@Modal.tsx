"use client";import { useRouter } from "nextjs-progressloader";
import { Modal as BModal } from "@components";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export function Modal({ children, className }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <BModal
      isOpen
      onClose={handleClose}
      className={twMerge("w-1/2 max-w-3xl", className)}
    >
      {children}
    </BModal>
  );
}
