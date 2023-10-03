"use client";import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { HamburgerButton } from "./components/HamburgerButton";
import { Navigation } from "./components/Navigation";

export function Header() {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <header className="h-12 w-full">
      <div className="py-2 w-full fixed z-10 bg-primary-600 font-semibold lg:px-3 ">
        <nav className="flex justify-between text-zinc-100">
          <Link className="m-auto" href="/">
            <img
              src="/assets/logo.png"
              alt="Logo do blog do Samuel Matos"
              width={45}
              height={50}
            />
          </Link>

          <HamburgerButton setIsDropDown={setIsDropDown} />

          <Navigation isDropDown={isDropDown} />
        </nav>
      </div>
    </header>
  );
}
