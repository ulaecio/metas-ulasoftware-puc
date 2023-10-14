import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import history from "./history";
import { getAuthData } from "./storage";

//export const BASE_URL = `http://${"localhost"}:8080`;

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'https://metas-ulasoftware-puc-071d84e3f6d2.herokuapp.com';

const CLIENT_ID = process.env.REACT_APP_BACKEND_URL ?? "metaspuc";
const CLIENT_SECRET = process.env.REACT_APP_BACKEND_URL ?? "metaspuc123";
type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

// Add a request interceptor
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.status === 401 /*  || error.response.status === 403  */
    ) {
      history.push("/auth/login");
    }
    return Promise.reject(error);
  }
);