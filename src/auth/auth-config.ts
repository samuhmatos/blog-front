import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios, { AxiosError } from "axios";

import { authService, userService } from "@domain";
import { ErrorApi } from "@api";

export const nextAuthPages: NextAuthOptions["pages"] = {
  signIn: "/auth/login",
};

export const nextAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email" },
        password: { label: "password" },
      },

      async authorize(credentials) {
        try {
          const { user, token } = await authService.login({
            ...credentials!,
          });

          return Promise.resolve({
            ...user,
            id: user.id.toString(),
            accessToken: token,
          });
        } catch (err) {
          const error = err as Error | AxiosError<ErrorApi>;

          if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data.message);
          } else {
            throw new Error(error.message);
          }
        }
      },
    }),
  ],
  pages: nextAuthPages,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      user && (token.user = user as any);

      if (trigger === "update") {
        let data = { ...token, user: session.user };
        return data;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
  events: {
    async signOut() {
      try {
        await userService.logout();
      } catch (err) {
        const error = err as Error | AxiosError<ErrorApi>;

        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data.message);
        } else {
          throw new Error(error.message);
        }
      }
    },
  },
};
