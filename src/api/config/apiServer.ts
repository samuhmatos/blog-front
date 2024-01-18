import axios, { AxiosInstance } from "axios";import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@auth";

const createAxiosInstance = async (
  token: string | null
): Promise<AxiosInstance> => {
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

export const apiServer = async (): Promise<AxiosInstance> => {
  const session = await getServerSession(nextAuthOptions);
  var token = session?.user.accessToken || null;

  return createAxiosInstance(token);
};
