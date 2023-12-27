import axios, { AxiosInstance } from "axios";
import { BASE_API, LOCAL_URL } from "@config";

const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const { data } = await axios.get<{ token: string | null }>(
    LOCAL_URL + "/api/token"
  );
  const { token } = data;

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
