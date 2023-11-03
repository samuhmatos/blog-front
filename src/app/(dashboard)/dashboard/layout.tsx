"use client";
import { Metadata } from "next";
import { Navigation, SideBar } from "./components";
import { ContainerLink, LinkProps, changeRoute } from "nextjs-progressloader";
import { linkUtils } from "@utils";
import { authService } from "@domain";
import { useEffect, useState } from "react";
import { useAuth } from "@context";
import { CircularProgress } from "@mui/material";

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
    href: linkUtils.linkDashboard("categorias/create"),
    nickname: "categoria.create",
  },
  {
    href: linkUtils.linkDashboard("categorias/update"),
    nickname: "categoria.update",
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
  {
    href: linkUtils.linkDashboard("posts/create"),
    nickname: "post.create",
  },
  {
    href: linkUtils.linkDashboard("posts/update"),
    nickname: "post.update",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      authService
        .currentUser()
        .then((resUser) => {
          if (!resUser.isAdmin) {
            throw "Authorized";
          }

          setIsLoaded(true);
        })
        .catch((error) => {
          setIsLoaded(false);
          changeRoute("home");
        });
    })();
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <CircularProgress size={60} />
      </div>
    );
  }

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
