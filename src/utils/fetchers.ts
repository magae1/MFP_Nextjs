import axios from "axios";
import jwt_decode from "jwt-decode";

import { IAccessTokenPayLoad } from "@/utils/IData";

export const baseAxios = axios.create({
  timeout: 2000,
  withCredentials: true,
});

export const baseGetFetcher = (url: string) =>
  baseAxios.get(url).then((res) => res.data);

export const refreshTokenFetcher = (url: string) =>
  baseAxios
    .post(url)
    .then((res) => {
      baseAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.access}`;
      const payload: IAccessTokenPayLoad = jwt_decode(res.data.access);
      return payload;
    })
    .catch((err) => err);
