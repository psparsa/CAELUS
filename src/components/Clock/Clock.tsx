import React from "react";
import * as styles from "./Clock.module.css";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Clock = () => {
  const [date, setDate] = React.useState({});
  const [time, setTime] = React.useState({});

  const updateDate = () => {
    const d = new Date();
    setDate({
      d: d.getDate(),
      m: monthNames[d.getMonth()],
      y: d.getFullYear(),
    });
  };

  const updateTime = () => {
    const d = new Date();
    setTime({
      h: d.getHours() === 0 ? "00" : d.getHours(),
      m: d.getMinutes() === 0 ? "00" : d.getMinutes(),
    });
  };

  React.useEffect(() => {
    updateDate();
    updateTime();
    document.addEventListener("focus", updateDate);
    const x = window.setInterval(updateTime, 1000);
    return () => {
      document.removeEventListener("focus", updateDate);
      window.clearInterval(x);
    };
  }, []);

  return (
    <div className={styles.Clock}>
      <p className={styles.Time}>
        {time.h}:{time.m}
      </p>
      <p className={styles.Date}>
        {date.d} {date.m}, {date.y}
      </p>
    </div>
  );
};
