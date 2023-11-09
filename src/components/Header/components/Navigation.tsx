"use client";import Link from "next/link";
import { linkUtils } from "@utils";
import { twMerge } from "tailwind-merge";
import { SearchInput } from "./SearchInput";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Category } from "@domain";
import { useToggleOpenNavigation } from "@hooks";

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

  useEffect(() => {
    if (open) {
      ulRef.current?.classList.remove("hideNav");
      ulRef.current?.classList.add("showNav");
    } else {
      ulRef.current?.classList.remove("showNav");
      ulRef.current?.classList.add("hideNav");
    }
  }, [open]);

  return (
    <ul
      className={
        "border-t border-primary-600 font-medium text-base gap-3 pt-2 flex flex-wrap justify-center md:justify-start overflow-hidden transition-all"
      }
      ref={ulRef}
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
    </ul>
  );
}
