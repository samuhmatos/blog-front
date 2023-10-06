"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { HamburgerButton } from "./components/HamburgerButton";
import { Navigation } from "./components/Navigation";
import { UserCard } from "../UserCard/UserCard";
import { AuthModal } from "./components/AuthModal";
import { useAuth } from "@domain";
import { SearchInput } from "./components/SearchInput";

export function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      var windowWidth = window.innerWidth;

      if (windowWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });

    return window.removeEventListener("resize", () => {});
  });

  return (
    <header className="h-12 h-auto w-full fixed top-0 z-10">
      <div className="py-2 px-3 bg-primary-500 font-semibold flex flex-col gap-2">
        <div className="flex justify-between items-center gap-3">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo do blog do Samuel Matos"
              width={45}
              height={50}
            />
          </Link>

          <div className="hidden 3sm:flex w-3/5 md:w-1/2 lg:w-1/3 ">
            <SearchInput />
          </div>

          <div className="flex items-center gap-2 justify-center h-full">
            {user ? (
              <UserCard />
            ) : (
              <>
                <AuthModal isSignIn />
                <AuthModal />
              </>
            )}
            <HamburgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        </div>

        <Navigation isOpen={isOpen} />
      </div>
    </header>
  );
}
