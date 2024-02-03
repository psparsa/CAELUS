import { AbstractAPIGelocationResponse } from '../../responseTypes/abstractAPI.response';
import { PublicIpDTO } from './network.types';

export const networkMappers = {
  getIP: {
    toClient: (response: AbstractAPIGelocationResponse): PublicIpDTO => ({
      ip: response.ip_address,
      countryFlagSrc: response.flag.svg,
    }),
  },
};
