"use client";
import Link from "next/link";
import { linkUtils } from "@utils";
import { twMerge } from "tailwind-merge";
import { SearchInput } from "./SearchInput";
import { useRef } from "react";
import { Variants, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Category } from "@domain";
import { useToggleOpenNavigation } from "@hooks";

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
  categories: Category[];
}

export function Navigation({ categories }: Props) {
  const { open } = useToggleOpenNavigation();

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
      animate={open ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.1 }}
    >
      <div className="block 3sm:hidden w-full mb-2">
        <SearchInput />
      </div>

      <RenderItem label="Home" url="/" />

      {categories?.map((category) => (
        <RenderItem
          key={category.id}
          label={category.name}
          url={linkUtils.linkCategory(category.slug)}
        />
      ))}

      <RenderItem label="Contato" url="/contato" />
    </motion.ul>
  );
}

// TODO: usercard appear by server rendering end then appear using the custom hook
