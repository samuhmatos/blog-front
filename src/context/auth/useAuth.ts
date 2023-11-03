import { AuthService } from "./providers/AuthProvider";
import { useAuthContext } from "./useAuthContext";

export function useAuth(): Pick<
  AuthService,
  "errorMessage" | "loading" | "user"
> {
  const { user, loading, errorMessage } = useAuthContext();

  return {
    user,
    loading,
    errorMessage,
  };
}

export function useAuthService(): Pick<
  AuthService,
  "logout" | "signIn" | "signUp" | "setUser"
> {
  const { signIn, signUp, logout, setUser } = useAuthContext();

  return {
    signIn,
    signUp,
    logout,
    setUser,
  };
}
