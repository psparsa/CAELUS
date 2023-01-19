type SuggestionsResponse = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}[];

const API_KEY = process.env.WEATHER_API_KEY;
export const getCitySuggestions = async (q: string) => {
  try {
    const f = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${q}`
    );
    const response = await f.json();
    return response as SuggestionsResponse;
  } catch (error) {
    throw new Error(String(error));
  }
};
