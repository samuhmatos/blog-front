"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "nextjs-progressloader";
import { CircularProgress } from "@mui/material";

import { UserCard, Button } from "@components";
import { HamburgerButton } from "./HamburgerButton";
import { useAuth } from "@auth";

export function Actions() {
  const router = useRouter();

  const { session, status } = useAuth();
  var loading = status === "loading";

  const pathName = usePathname();

  function navigateToLoginPage() {
    router.push("login", {
      queryStrings: [
        {
          key: "redirect",
          value: pathName,
        },
      ],
    });
  }

  function renderAction(): JSX.Element {
    if (session?.user) {
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
