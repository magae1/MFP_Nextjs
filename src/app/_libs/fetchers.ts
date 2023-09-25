import axios from "axios";

export const baseAxios = axios.create({
  timeout: 3000,
  withCredentials: true,
  method: "POST",
});

export const refreshFetcher = () =>
  baseAxios.post(`/auth/refresh`).then((res) => {
    baseAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data.access}`;
    return res.data;
  });
