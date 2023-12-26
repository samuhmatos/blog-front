import axios, { AxiosInstance } from "axios";
import { BASE_API } from "@config";
import { fsUtils } from "@/utils/fsUtils";

const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const { token } = await fsUtils.read<{ token: string }>("./session.json");

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

export const serverApi = createAxiosInstance();
