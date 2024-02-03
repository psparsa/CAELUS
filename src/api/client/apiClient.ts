import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { responseInterceptor } from './responseInterceptor';
import { requestInterceptor } from './requestInterceptor';

export const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(responseInterceptor);
axiosInstance.interceptors.request.use(requestInterceptor);

export type APIResponse<T> = {
  data: T;
  statusCode: number;
  responseHeaders: AxiosResponse['headers'];
};

export type apiClientProperties = AxiosRequestConfig;

export const apiClient = async <TRawResponse>(
  properties: apiClientProperties
): Promise<APIResponse<TRawResponse>> => {
  const response = await axiosInstance({
    ...properties,
  });

  return {
    data: response.data,
    statusCode: response.status,
    responseHeaders: response.headers,
  };
};
