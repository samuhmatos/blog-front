"use client";
import { motion } from "framer-motion";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Usuários",
  robots: {
    index: false,
  },
};

export default function UserManagement() {
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
