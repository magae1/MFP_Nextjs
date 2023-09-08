import axios from "axios";

const InternalURL = "http://127.0.0.1:8000/";
const ExternalURL = process.env.ExternalURL;

export const baseAxios = axios.create({
  baseURL: InternalURL + "api/",
  timeout: 2000,
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
