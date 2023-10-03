"use client";import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@components";

interface Props {
  justify?: "center" | "normal";
  title: string;
  subTitle: string;
}

export function Share({ justify = "center", subTitle, title }: Props) {
  const actualLink = usePathname();

  return (
    <nav className={`text-white font-bold flex gap-2 justify-${justify} my-4`}>
      <Link
        className="px-6 py-3 bg-blue-900 flex items-center gap-4 rounded transition-all hover:bg-blue-950"
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${actualLink}`}
      >
        <Icon name="Facebook" />
        <span className="hidden md:block">Compartilhar no Facebook</span>
      </Link>
      <Link
        className="px-6 py-3 bg-sky-400 flex items-center gap-4 rounded transition-all hover:bg-sky-500"
        target="_blank"
        href={`http://twitter.com/share?&url=${title}&text=${subTitle}`}
      >
        <Icon name="Twitter" />

        <span className="hidden md:block">Compartilhar no Twitter</span>
      </Link>
    </nav>
  );
}
