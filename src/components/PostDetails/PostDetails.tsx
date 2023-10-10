import Link from "next/link";import { Icon } from "../Icon/Icon";
import { numberUtils } from "@utils";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  link?: boolean;
  linkPost: string;
  linkCategory: string;
  date: string;
  author: string;
  views: number;
}

interface renderItemProps {
  label: string | ReactNode;
  className?: string;
  href?: string;
}

export function PostDetails({
  author,
  linkCategory,
  date,
  linkPost,
  views,
  link,
}: Props) {
  function RenderItem({
    label,
    className,
    href,
  }: renderItemProps): ReactNode | string {
    if (href) {
      return (
        <small>
          <Link href={href} className={twMerge("hover:underline", className)}>
            {label}
          </Link>
        </small>
      );
    }

    return (
      <small className={twMerge("cursor-default", className)}>{label}</small>
    );
  }

  return (
    <div
      className={`flex flex-1 justify-around items-center gap-4 text-gray-500 flex-wrap sm:flex-nowrap sm:justify-center`}
    >
      <RenderItem label={date} href={link ? linkPost : undefined} />
      <RenderItem label={author} href={link ? linkCategory : undefined} />
      <RenderItem
        label={
          <>
            <Icon name="Eyes" /> {numberUtils.toRelativeAmount(views)}
          </>
        }
        className="flex items-center gap-1 text-gray-500"
        href={link ? linkPost : undefined}
      />
    </div>
  );
}
