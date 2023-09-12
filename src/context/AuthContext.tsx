"use client";
import React, { useState, createContext } from "react";
import { User } from "@domain";

interface Auth {
  user: User | null;
  token: string | null;
  CSRF: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setCSRF: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AuthContext = createContext<Auth>({
  user: null,
  token: null,
  CSRF: null,
  setUser: () => {},
  setToken: () => {},
  setCSRF: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [CSRF, setCSRF] = useState<string | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        CSRF,
        setToken,
        setUser,
        setCSRF,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
