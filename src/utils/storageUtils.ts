import { deleteCookie, getCookie } from "cookies-next";
interface Storage {
  token: string | null;
}

function loadStorageData(): Storage {
  const tokenStorage = getOne("token");

  if (tokenStorage) {
    return {
      token: tokenStorage,
    };
  } else {
    return {
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
