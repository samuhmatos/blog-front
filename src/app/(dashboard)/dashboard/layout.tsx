"use client";
import { Metadata } from "next";
import { Navigation, SideBar } from "./components";
import { ContainerLink, LinkProps } from "nextjs-progressloader";
import { linkUtils } from "@utils";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: {
    index: false,
  },
};

const links: LinkProps[] = [
  {
    href: linkUtils.linkDashboard("categorias"),
    nickname: "categories",
  },
  {
    href: linkUtils.linkDashboard("usuarios"),
    nickname: "users",
  },
  {
    href: linkUtils.linkDashboard("usuarios/create"),
    nickname: "createUser",
  },
  {
    href: linkUtils.linkDashboard("usuarios/update"),
    nickname: "user.update",
  },
  {
    href: linkUtils.linkDashboard("posts"),
    nickname: "posts",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ContainerLink links={links} />
      <Navigation />

      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          {children}
        </div>
      </div>
    </div>
  );
}
