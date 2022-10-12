import { UserInfo, FavoritesAmount } from "./localeStorageTypes";

export const getUserData = (): UserInfo => {
  const parseString = localStorage.getItem("user");
  if (parseString) {
    return JSON.parse(parseString) as UserInfo;
  } else {
    return { username: "Basic User", iconPath: "./img/avatar.png" };
  }
};

export const getFavoritesAmount = () => {
  const parseString = localStorage.getItem("favoritesAmount");
  if (parseString) {
    return Number(JSON.parse(parseString) as FavoritesAmount);
  } else {
    return 0;
  }
};
