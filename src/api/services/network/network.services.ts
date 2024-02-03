import { apiClient } from '../../client';
import { AbstractAPIGelocationResponse } from '../../responseTypes/abstractAPI.response';
import { networkMappers } from './network.mappers';

// eslint-disable-next-line const-case/uppercase
const API_KEY = process.env.ABSTRACT_API_KEY;
export const networkServices = {
  getIP: async () => {
    const { data } = await apiClient<AbstractAPIGelocationResponse>({
      method: 'GET',
      url: `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`,
    });

    return networkMappers.getIP.toClient(data);
  },
};
