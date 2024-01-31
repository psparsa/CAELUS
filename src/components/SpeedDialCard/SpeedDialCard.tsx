import React from 'react';
import { cc } from '../../utils/combineClassNames';
import * as styles from './SpeedDialCard.module.css';

interface SpeedDialCardProps {
  name: string;
  link: string;
  className?: string;
}

export const SpeedDialCard = ({
  name,
  link,
  className,
}: SpeedDialCardProps) => {
  const handleClick = () => Reflect.set(window.location, 'href', link);

  const getIconSrc = (websiteLink: string) =>
    `https://www.google.com/s2/favicons?domain=${websiteLink}&sz=128`;

  return (
    <div className={cc([styles.SpeedDialCard, className])}>
      <div className={styles.DeleteIcon}>
        <img src="/trash.svg" />
      </div>
      <div className={styles.ImageFrame} onClick={handleClick}>
        <img src={getIconSrc(link)} className={styles.Icon} />
      </div>
      <p className={styles.Name} onClick={handleClick}>
        {name}
      </p>
    </div>
  );
};
