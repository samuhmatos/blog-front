"use client";
import { useRouter } from "next/navigation";
import { HTMLAttributeAnchorTarget } from "react";
import { AiFillLinkedin, AiFillPicture } from "react-icons/ai";
import {
  BiDislike,
  BiLike,
  BiMinus,
  BiPlus,
  BiSolidCategory,
  BiSolidDislike,
  BiSolidEdit,
  BiSolidLike,
} from "react-icons/bi";
import {
  BsEye,
  BsFacebook,
  BsFillEnvelopeFill,
  BsGithub,
  BsInstagram,
  BsPostcardFill,
  BsSend,
  BsTwitter,
  BsWifi,
} from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { DashboardIcon } from "./DashboardIcon";
import { InboxIcon } from "./InboxIcon";
import { UserIcon } from "./UserIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { HomeIcon } from "./HomeIcon";
import { ArrowRightHalfIcon } from "./ArrowRightHalfIcon";
import { SearchIcon } from "./SearchIcon";

export interface IconProps {
  name: IconName;
  // color?: string;
  // hoverColor?: string | null;
  size?: "text-lg" | "text-2xl" | "text-4xl" | "text-base" | "text-xl";
  className?: string;
  link?: {
    href: string;
    target?: HTMLAttributeAnchorTarget;
  };
}

export function Icon({ name, size = "text-lg", className, link }: IconProps) {
  const router = useRouter();
  const SVGIcon = iconRegistry[name];

  return (
    <div
      className={twMerge(
        "active:text-zinc-300 cursor-pointer transition-all",
        size,
        className
      )}
      onClick={() => {
        if (link) {
          window.open(link.href, link.target || "");
        }

        return;
      }}
    >
      <SVGIcon />
    </div>
  );
}

const iconRegistry = {
  Instagram: BsInstagram,
  LinkedIn: AiFillLinkedin,
  Envelope: BsFillEnvelopeFill,
  GitHub: BsGithub,
  Facebook: BsFacebook,
  Twitter: BsTwitter,
  Picture: AiFillPicture,
  ArrowUp: IoIosArrowUp,
  ArrowDown: IoIosArrowDown,
  Eyes: BsEye,
  Play: FaPlay,
  Plus: BiPlus,
  Minus: BiMinus,
  Dislike: BiDislike,
  Like: BiLike,
  DislikeSolid: BiSolidDislike,
  LikeSolid: BiSolidLike,
  Send: BsSend,
  Wifi: BsWifi,
  Trash: FaTrashCan,
  PostCard: BsPostcardFill,
  CategorySolid: BiSolidCategory,
  Dashboard: DashboardIcon,
  Inbox: InboxIcon,
  User: UserIcon,
  ArrowRight: ArrowRightIcon,
  Home: HomeIcon,
  ArrowRightHalf: ArrowRightHalfIcon,
  Search: SearchIcon,
  Edit: BiSolidEdit,
};

type Icontype = typeof iconRegistry;
export type IconName = keyof Icontype;
