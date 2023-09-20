import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

import { IAccessTokenPayLoad } from "@/utils/IData";

export const storeTokenPayload = (token: string) => {
  const decoded: IAccessTokenPayLoad = jwt_decode(token);
  window.localStorage.setItem("exp", decoded.exp);
  window.localStorage.setItem("id", decoded.account_identifier);
  window.localStorage.setItem("nickname", decoded.nickname);
  window.localStorage.setItem("avatar", decoded.avatar);
};

export const doesTokenExpired = (): boolean => {
  const exp = window.localStorage.getItem("exp");
  if (exp) {
    const expireTime = parseInt(exp);
    if (dayjs().add(1, "minute").isBefore(dayjs.unix(expireTime))) return true;
  }
  return false;
};
