import axios, { AxiosInstance } from "axios";import { getCookie } from "cookies-next";
import { BASE_API } from "@config";

const createAxiosInstance = (): AxiosInstance => {
  const token = getCookie("token");

  const instance = axios.create({
    baseURL: BASE_API,
    headers: {
      //Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
    // xsrfHeaderName: "X-CSRF-TOKEN",
  });

  if (token) {
    instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return instance;
};

export const api = createAxiosInstance();
