import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

import { User as UserType } from "@domain";

interface UserAuth extends UserType {
  accessToken: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: UserAuth;
  }
  interface User extends UserAuth {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserAuth;
  }
}
