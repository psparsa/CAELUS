import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const axiosInstance = axios.create();

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
