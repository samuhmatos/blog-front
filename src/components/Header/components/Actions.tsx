"use client";
import { UserCard } from "./../../UserCard/UserCard";
import { useAuth } from "@context";
import { HamburgerButton } from "./HamburgerButton";
import { Button } from "../../Button/Button";
import { changeRoute } from "nextjs-progressloader";
import { usePathname } from "next/navigation";

export function Actions() {
  const { user, loading } = useAuth();
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
        <Button
          placeholder="Entrar"
          onClick={handleInvokeLoginPage}
          disabled={loading}
        />
      )}
      <HamburgerButton />
    </div>
  );
}
// TODO: ADD LOADING STATE INSTEAD BUTTON COMPONENT WHEN 'INITIAL STATE' IS LOADING
