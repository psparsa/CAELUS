import React from 'react';
import * as styles from './Clock.module.css';

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getDate = () => {
  const d = new Date();
  return {
    d: d.getDate(),
    m: monthNames[d.getMonth()],
    y: d.getFullYear(),
  };
};

const getTime = () => {
  const d = new Date();
  return {
    h: d.getHours() === 0 ? '00' : d.getHours(),
    m: d.getMinutes() === 0 ? '00' : d.getMinutes(),
  };
};

export const Clock = () => {
  const [date, setDate] = React.useState(getDate());
  const [time, setTime] = React.useState(getTime());

  const updateDate = () => setDate(getDate());
  const updateTime = () => setTime(getTime());

  React.useEffect(() => {
    document.addEventListener('focus', updateDate);
    const x = window.setInterval(updateTime, 1000);
    return () => {
      document.removeEventListener('focus', updateDate);
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
