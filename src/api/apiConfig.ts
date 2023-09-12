import axios, { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

const createAxiosInstance = (): AxiosInstance => {
  const token = getCookie("token");
  const CSRF = getCookie("CSRF");

  const instance = axios.create({
    baseURL: process.env.BASE_URL_API,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-CSRF-TOKEN": CSRF,
    },
    withCredentials: true,
  });

  return instance;
};

//const getApiInstance = () => createAxiosInstance();

export const api = createAxiosInstance();
