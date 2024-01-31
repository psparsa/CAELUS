type SuggestionsResponse = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}[];

const apiKey = process.env.WEATHER_API_KEY;
export const getCitySuggestions = async (keyword: string) => {
  const fetchResult = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${keyword}`
  );
  const response = await fetchResult.json();
  return response as SuggestionsResponse;
};
