import axios from "axios";
import { getCookie } from "cookies-next";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Authorization: "Bearer " + getCookie("token"),
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
