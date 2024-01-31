import React from 'react';
import { getCitySuggestions } from '../../api/getCitySuggestions';
import { getCurrentWeather } from '../../api/getCurrentWeather';
import { debounce } from '../../utils/debounce';
import * as styles from './Weather.module.css';

export const Weather = () => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [city, setCity] = React.useState(
    localStorage.getItem('city') ?? 'Berlin'
  );
  const [isSearchBoxVisible, setSearchBoxVisibility] = React.useState(false);
  const [data, setData] = React.useState({
    icon: '#',
    temperature: '∞',
  });

  const updateWeatherData = (cityName = city) => {
    getCurrentWeather(cityName)
      .then((res) => {
        setData({
          icon: res.current.condition.icon,
          temperature: '' + ~~res.current.temp_c,
        });
      })
      .catch(console.error);
  };

  const handleSearch = debounce((k: string) => {
    setSuggestions([]);
    getCitySuggestions(k)
      .then((res) => {
        setSuggestions(res.map((x) => x.name));
      })
      .catch(console.error);
  }, 500);

  const handleSelect = (c: string) => {
    localStorage.setItem('city', c);
    setCity(c);
    setSearchBoxVisibility(false);
    setSuggestions([]);
    updateWeatherData(c);
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
