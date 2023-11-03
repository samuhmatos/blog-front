import axios, { AxiosInstance } from "axios";import { getCookie } from "cookies-next";
import { BASE_API } from "@config";

const createAxiosInstance = (): AxiosInstance => {
  const token = getCookie("token");

  const instance = axios.create({
    baseURL: BASE_API,
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

export const api = createAxiosInstance();
