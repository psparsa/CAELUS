import React from 'react';
import { cc } from '../../utils/combineClassNames';
import * as styles from './SpeedDialCard.module.css';

interface SpeedDialCardProps {
  name: string;
  link: string;
  iconSrc: string;
  className?: string;
}

export const SpeedDialCard = ({
  name,
  link,
  iconSrc,
  className,
}: SpeedDialCardProps) => {
  const handleClick = () => Reflect.set(window.location, 'href', link);

  return (
    <div className={cc([styles.SpeedDialCard, className])}>
      <div className={styles.DeleteIcon}>
        <img src="/trash.svg" />
      </div>
      <div className={styles.ImageFrame} onClick={handleClick}>
        <img src={iconSrc} className={styles.Icon} />
      </div>
      <p className={styles.Name} onClick={handleClick}>
        {name}
      </p>
    </div>
  );
};
