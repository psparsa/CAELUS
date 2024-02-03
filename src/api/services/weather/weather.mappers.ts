import {
  WeatherAPICityResponse,
  WeatherAPIWeatherResponse,
} from '../../responseTypes/weatherAPI.response';
import { CityDTO, WeatherDTO } from './weather.types';

export const weatherMappers = {
  searchCity: {
    toClient: (response: WeatherAPICityResponse[]): CityDTO[] =>
      response.map((city) => ({
        name: city.name,
        region: city.region,
        country: city.country,
      })),
  },
  inquiryWeather: {
    toClient: (response: WeatherAPIWeatherResponse): WeatherDTO => ({
      locationName: response.location.name,
      celsiusTemperature: response.current.temp_c,
      weatherIndicatorIconSrc: response.current.condition.icon,
    }),
  },
};
