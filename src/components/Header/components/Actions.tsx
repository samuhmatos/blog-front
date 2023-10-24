"use client";import { UserCard } from "./../../UserCard/UserCard";
import { useAuth } from "@domain";
import { HamburgerButton } from "./HamburgerButton";
import { Button } from "../../Button/Button";
import { changeRoute } from "nextjs-progressloader";

export function Actions() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2 justify-center h-full">
      {user ? (
        <UserCard />
      ) : (
        <Button placeholder={"Entrar"} onClick={() => changeRoute("login")} />
      )}
      <HamburgerButton />
    </div>
  );
}

//TODO: SET REDIRECT PAGE
