"use client";
import { usePathname } from "next/navigation";
import { changeRoute } from "nextjs-progressloader";
import { CircularProgress } from "@mui/material";

import { UserCard, Button } from "@components";
import { useAuth } from "@context";
import { HamburgerButton } from "./HamburgerButton";

export function Actions() {
  const { user, loading } = useAuth();
  const pathName = usePathname();

  function navigateToLoginPage() {
    changeRoute("login", {
      queryStrings: [
        {
          key: "redirect",
          value: pathName,
        },
      ],
    });
  }

  function renderAction(): JSX.Element {
    console.log(loading);
    if (user) {
      return <UserCard />;
    } else {
      if (loading) {
        return <CircularProgress size={30} />;
      } else {
        return (
          <Button
            placeholder="Entrar"
            onClick={navigateToLoginPage}
            disabled={loading}
          />
        );
      }
    }
  }

  return (
    <div className="flex items-center gap-2 justify-center h-full">
      {renderAction()}
      <HamburgerButton />
    </div>
  );
}
