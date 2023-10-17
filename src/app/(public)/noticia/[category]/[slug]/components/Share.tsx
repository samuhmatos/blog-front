"use client";import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconName } from "@components";
import { linkUtils } from "@utils";
import { twMerge } from "tailwind-merge";

interface Props {
  justify?: "center" | "normal";
  title: string;
  subTitle: string;
}

interface RenderItemProps {
  link: string;
  icon: IconName;
  label: string;
  className: string;
}

export function Share({ justify = "center", subTitle, title }: Props) {
  const actualLink = usePathname();

  function RenderItem({ link, icon, label, className }: RenderItemProps) {
    return (
      <Link
        className={twMerge(
          "px-6 py-3 flex items-center gap-4 rounded transition-all",
          className
        )}
        target="_blank"
        href={link}
      >
        <Icon name={icon} />
        <span className="hidden md:block">{label}</span>
      </Link>
    );
  }

  return (
    <nav className={`text-white font-bold flex gap-2 justify-${justify} my-4`}>
      <RenderItem
        link={linkUtils.share.facebook(actualLink)}
        icon="Facebook"
        label="Compartilhar no Facebook"
        className="bg-blue-900 hover:bg-blue-950"
      />

      <RenderItem
        link={linkUtils.share.twitter(actualLink, title)}
        icon="Twitter"
        label="Compartilhar no Twitter"
        className="bg-sky-400 hover:bg-sky-500"
      />
    </nav>
  );
}
