import { apiClient } from '../../client';
import {
  WeatherAPICityResponse,
  WeatherAPIWeatherResponse,
} from '../../responseTypes/weatherAPI.response';
import { weatherMappers } from './weather.mappers';

// eslint-disable-next-line const-case/uppercase
const API_KEY = process.env.WEATHER_API_KEY;
export const weatherServices = {
  searchCity: async (keyword: string) => {
    const { data } = await apiClient<WeatherAPICityResponse[]>({
      method: 'GET',
      url: `https://api.weatherapi.com/v1/search.json`,
      params: {
        key: API_KEY,
        q: keyword,
      },
    });

    return weatherMappers.searchCity.toClient(data);
  },
  inquiryWeather: async (cityName: string) => {
    const { data } = await apiClient<WeatherAPIWeatherResponse>({
      method: 'GET',
      url: `https://api.weatherapi.com/v1/current.json`,
      params: {
        key: API_KEY,
        q: cityName,
        aqi: 'no',
      },
    });

    return weatherMappers.inquiryWeather.toClient(data);
  },
};
