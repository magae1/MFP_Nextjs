import axios from "axios";

const InternalURL = "http://127.0.0.1:8000/";
const ExternalURL = process.env.ExternalURL;

export const baseAxios = axios.create({
  baseURL: InternalURL + "api/",
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
