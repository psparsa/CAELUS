import React from "react";
import * as styles from "./Weather.module.css";

interface WeatherProps {
  iconSrc: string;
  cityName: string;
  temperature: number;
}

export const Weather = ({ iconSrc, cityName, temperature }: WeatherProps) => {
  return (
    <div className={styles.Weather}>
      <img src={iconSrc} className={styles.Icon} />
      <p>
        <p className={styles.CityName}>{cityName}</p> | {temperature}°C
      </p>
    </div>
  );
};
