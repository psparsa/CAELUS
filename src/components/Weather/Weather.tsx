import React from 'react';
import { weatherServices } from '../../api/services/weather';
import { debounce } from '../../utils/debounce';
import * as styles from './Weather.module.css';

export const Weather = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [city, setCity] = React.useState('Berlin');
  const [isSearchBoxVisible, setSearchBoxVisibility] = React.useState(false);
  const [data, setData] = React.useState({
    icon: '#',
    temperature: '∞',
  });

  React.useEffect(() => {
    const city = localStorage.getItem('city');
    if (city) setCity(city);
  }, []);

  const updateWeatherData = (cityName = city) => {
    weatherServices
      .inquiryWeather(cityName)
      .then((result) => {
        setData({
          icon: result.weatherIndicatorIconSrc,
          temperature: Math.round(result.celsiusTemperature).toString(),
        });
      })
      .catch(console.error);
  };

  const handleSearch = debounce((keyword: string) => {
    setSuggestions([]);
    weatherServices
      .searchCity(keyword)
      .then((result) => {
        setSuggestions(result.map((x) => x.name));
      })
      .catch(console.error);
  }, 500);

  const handleSelect = (city: string) => {
    localStorage.setItem('city', city);
    setCity(city);
    setSearchBoxVisibility(false);
    setSuggestions([]);
    updateWeatherData(city);
  };

  const handleClickOnDocument = (e: MouseEvent) => {
    if (ref.current)
      if (!ref.current.contains(e.target as Node | null))
        setSearchBoxVisibility(false);
  };

  React.useEffect(() => {
    updateWeatherData();
    document.addEventListener('click', handleClickOnDocument);
    return () => document.removeEventListener('click', handleClickOnDocument);
  }, []);

  return (
    <div ref={ref}>
      <div
        className={styles.Weather}
        onClick={() => setSearchBoxVisibility(true)}
      >
        <img src={data.icon} className={styles.Icon} />
        <span>
          <p className={styles.CityName}>{city}</p> | {data.temperature}°C
        </span>
      </div>
      {isSearchBoxVisible && (
        <div className={styles.CitySelector}>
          <p className={styles.SearchTitle}>Where are you?</p>
          <input
            type="text"
            placeholder="City name..."
            autoFocus={true}
            onChange={(event) => handleSearch(event.target.value)}
            className={styles.SearchInput}
          />

          {suggestions.length > 0 && (
            <div className={styles.SuggestionsContainer}>
              {suggestions.map((name) => (
                <div
                  onClick={() => handleSelect(name)}
                  className={styles.SuggestionItem}
                  key={name}
                >
                  {name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
