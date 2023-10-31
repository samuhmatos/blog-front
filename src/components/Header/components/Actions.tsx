"use client";import { UserCard } from "./../../UserCard/UserCard";
import { useAuth } from "@domain";
import { HamburgerButton } from "./HamburgerButton";
import { Button } from "../../Button/Button";
import { changeRoute } from "nextjs-progressloader";
import { usePathname } from "next/navigation";

export function Actions() {
  const { user } = useAuth();
  const pathName = usePathname();

  function handleInvokeLoginPage() {
    changeRoute("login", {
      queryStrings: [
        {
          key: "redirect",
          value: pathName,
        },
      ],
    });
  }

  return (
    <div className="flex items-center gap-2 justify-center h-full">
      {user ? (
        <UserCard />
      ) : (
        <Button placeholder={"Entrar"} onClick={handleInvokeLoginPage} />
      )}
      <HamburgerButton />
    </div>
  );
}
