import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { User } from "@domain";

interface Storage {
  user: User | null;
  token: string | null;
  errorMessage: string | null;
}

function loadStorageData(): Storage {
  const userStorage = getOne<User>("user");
  const tokenStorage = getOne("token");
  const errorMessageStorage = getOne("errorMessage");

  if (userStorage && tokenStorage) {
    // const userParsed: User = JSON.parse(userStorage);

    return {
      user: userStorage,
      token: tokenStorage,
      errorMessage: errorMessageStorage,
    };
  } else {
    return {
      user: null,
      token: null,
      errorMessage: null,
    };
  }
}

function getOne<T = string>(key: keyof Storage): T | null {
  const data = getCookie(key);

  if (typeof data === "string") {
    return data ? (data as T) : null;
  }

  return data ? (JSON.parse(data) as T) : null;
}

function removeOne(key: keyof Storage): void {
  return deleteCookie(key);
}

export const storageUtils = {
  loadStorageData,
  getOne,
  removeOne,
};
