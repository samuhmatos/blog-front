"use client";
import { SignInParams, SignUpParams, User } from "@domain";
import { Dispatch, ReactNode, createContext } from "react";
import { useAuthProvider } from "./useAuthProvider";

export interface AuthService {
  user: User | null;
  setUser: Dispatch<AuthService["user"]>;
  errorMessage: string | null;
  loading: boolean;
  signIn: (params: SignInParams, callbackFn: () => void) => void;
  signUp: (params: SignUpParams, callbackFn: () => void) => void;
  logout: (pathname: string) => void;
}

export const AuthContext = createContext<AuthService>({
  user: null,
  setUser: () => {},
  errorMessage: null,
  loading: false,
  logout: () => {},
  signIn: () => {},
  signUp: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={useAuthProvider()}>
      {children}
    </AuthContext.Provider>
  );
}
