"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function UserManagement() {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="w-20 h-20 bg-red-600 mx-auto my-4"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      />

      <motion.div
        className="w-20 h-20 bg-red-600 mx-auto my-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      />

      <motion.div
        className="w-20 h-20 bg-red-600 mx-auto my-4"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      />
    </>
  );
}
