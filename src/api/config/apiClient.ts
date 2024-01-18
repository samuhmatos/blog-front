import { getSession } from "next-auth/react";import { getServerSession } from "next-auth";
import axios, { AxiosInstance } from "axios";

import { nextAuthOptions } from "@auth";

const createAxiosInstance = (token: string | null): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
  });

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return instance;
};

export const apiClient = async (): Promise<AxiosInstance> => {
  var token: string | null = null;

  const session =
    typeof window === "undefined"
      ? await getServerSession(nextAuthOptions)
      : await getSession();

  token = session?.user.accessToken || null;

  return createAxiosInstance(token);
};
