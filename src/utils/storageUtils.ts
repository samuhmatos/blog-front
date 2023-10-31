import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { User } from "@domain";

interface Storage {
  user: User | null;
  token: string | null;
}

function loadStorageData(): Storage {
  const userStorage = getOne<User>("user");
  const tokenStorage = getOne("token");

  if (userStorage && tokenStorage) {
    // const userParsed: User = JSON.parse(userStorage);

    return {
      user: userStorage,
      token: tokenStorage,
    };
  } else {
    return {
      user: null,
      token: null,
    };
  }
}

function getOne<T = string>(key: keyof Storage): T | null {
  const data = getCookie(key);

  try {
    return JSON.parse(data!) as T;
  } catch (err) {
    return (data as T) || null;
  }
}

function removeOne(key: keyof Storage): void {
  return deleteCookie(key);
}

export const storageUtils = {
  loadStorageData,
  getOne,
  removeOne,
};
