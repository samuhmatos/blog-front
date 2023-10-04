"use client";import Link from "next/link";
import { linkUtils } from "@utils";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { SearchInput } from "./SearchInput";
import { useRef } from "react";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants: Variants = {
  open: {
    opacity: 1,
    display: "flex",
  },
  closed: {
    opacity: 0,
    display: "none",
  },
};

interface Props {
  isOpen: boolean;
}

export function Navigation({ isOpen }: Props) {
  const pathname = usePathname();

  const ulRef = useRef<HTMLUListElement>(null);

  function RenderItem({ url, label }: { url: string; label: string }) {
    const activity = pathname === url;

    return (
      <li>
        <Link
          className={twMerge(
            "block w-full px-3 py-1 rounded-md",
            activity
              ? "bg-secondary text-gray-300"
              : "hover:bg-primary-700 text-gray-100"
          )}
          href={url}
        >
          <span className="text-base">{label}</span>
        </Link>
      </li>
    );
  }

  return (
    <motion.ul
      className={
        "border-t border-primary-600 font-medium text-base gap-3 pt-2 flex flex-wrap justify-center md:justify-start transition-all"
      }
      ref={ulRef}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.1 }}
    >
      <div className="block 3sm:hidden w-full mb-2">
        <SearchInput />
      </div>

      <RenderItem label="Home" url="/" />
      <RenderItem label="Tech" url={linkUtils.linkCategory("tech")} />
      <RenderItem label="Videos" url={linkUtils.linkCategory("videos")} />
      <RenderItem label="Portfólio" url={linkUtils.linkCategory("portfolio")} />
      <RenderItem
        label="Qualificações"
        url={linkUtils.linkCategory("qualificacoes")}
      />
      <RenderItem label="Reviews" url={linkUtils.linkCategory("reviews")} />
      <RenderItem label="Contato" url="/contato" />
    </motion.ul>
  );
}

// TODO: usercard appear by server rendering end then appear using the custom hook
