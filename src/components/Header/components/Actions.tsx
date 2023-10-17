"use client";

import { UserCard } from "./../../UserCard/UserCard";
import { AuthModal } from "./AuthModal";
import { useAuth } from "@domain";
import { HamburgerButton } from "./HamburgerButton";

export function Actions() {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2 justify-center h-full">
      {user ? (
        <UserCard />
      ) : (
        <>
          <AuthModal isSignIn />
          <AuthModal />
        </>
      )}
      <HamburgerButton />
    </div>
  );
}
