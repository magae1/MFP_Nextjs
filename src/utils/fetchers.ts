import axios, { InternalAxiosRequestConfig } from "axios";
import jwt_decode from "jwt-decode";

import { doesTokenExpired, storeTokenPayload } from "@/utils/tokens";

export const baseAxios = axios.create({
  baseURL: "http://localhost:3000/api/",
  timeout: 2000,
  withCredentials: true,
});

export const boxOfficeFetcher = (tagetDt: string) =>
  axios
    .get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.BOXOFFICE_KEY}&targetDt=${tagetDt}`,
      {
        timeout: 3000,
      },
    )
    .then((res) => res.data.boxOfficeResult)
    .catch((err) => err);

export const tmdbFetcher = (movie: string) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&language=ko&region=KR&api_key=${process.env.TMDB_API_KEY}`,
    )
    .then((res) => res.data)
    .catch((err) => err);
