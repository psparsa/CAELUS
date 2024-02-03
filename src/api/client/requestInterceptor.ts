import { InternalAxiosRequestConfig } from 'axios';

type Request = InternalAxiosRequestConfig;

export const requestInterceptor = (request: Request): Request => {
  return request;
};
