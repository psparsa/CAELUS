import { AxiosResponse } from 'axios';

type Response = AxiosResponse;

export const responseInterceptor = (response: Response): Response => {
  return response;
};
