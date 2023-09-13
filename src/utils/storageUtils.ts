import { deleteCookie, getCookie, hasCookie, setCookie } from "cookies-next";
import { User } from "@domain";

interface Storage {
  user: User | null;
  token: string | null;
}

function loadStorageData(): Storage {
  const userStorage = getCookie("user");
  const tokenStorage = getCookie("token");

  if (userStorage && tokenStorage) {
    const userParsed: User = JSON.parse(userStorage);

    return {
      user: userParsed,
      token: tokenStorage,
    };
  } else {
    return {
      user: null,
      token: null,
    };
  }
}

export const storageUtils = {
  loadStorageData,
};
