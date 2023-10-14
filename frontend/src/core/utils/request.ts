import axios, { Method } from 'axios';
import { requestBackend } from 'utils/request';
import { getAuthData } from 'utils/storage';

export type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? `http://${"localhost"}:8080`;

export const makeRequest = ({ method = 'GET', url, data, params, headers}: RequestParams) => {
    return axios({
        method, 
        url: `${BASE_URL}${url}`, 
        data, 
        params, 
        headers 
    });
}

export const makePrivateRequest = ({  method = 'GET', url, data, params }: RequestParams) => {
    const sessionData = getAuthData();

    const headers = {
      'Authorization': `Bearer ${sessionData.access_token}`
    };
  
    return requestBackend({ method, url, data, params, headers });
  }
