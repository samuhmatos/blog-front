import { useContext } from "react";import { AuthContext, AuthService } from "./providers/AuthProvider";

export function useAuthContext(): AuthService {
  return useContext(AuthContext);
}
