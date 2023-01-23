import React from 'react';
import { cc } from '../../utils/combineClassNames';
import { AddSpeedDial } from '../AddSpeedDial/AddSpeedDial';
import { SpeedDialCard } from '../SpeedDialCard/SpeedDialCard';
import * as styles from './SpeedDial.module.css';

interface SpeedDialProps {
  className?: string;
}

const dummyCards = [
  {
    name: 'Reddit',
    link: 'https://reddit.com',
    iconSrc: '/reddit.png',
  },
  {
    name: 'Reddit',
    link: 'https://reddit.com',
    iconSrc: '/reddit.png',
  },
  {
    name: 'Reddit',
    link: 'https://reddit.com',
    iconSrc: '/reddit.png',
  },
  {
    name: 'Reddit',
    link: 'https://reddit.com',
    iconSrc: '/reddit.png',
  },
];

export const SpeedDial = ({ className }: SpeedDialProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className={cc([className, styles.SpeedDial])}>
      <div className={styles.SuggestionsTogglerContainer}>
        <div
          className={styles.SuggestionsToggler}
          onClick={() => setIsExpanded((p) => !p)}
        >
          <div>{isExpanded ? 'Hide' : 'Show'} Suggestions</div>
          <img
            src={isExpanded ? '/arrow-up.svg' : '/arrow-down.svg'}
            className={styles.ToggerIcon}
          />
        </div>
      </div>
      {isExpanded && (
        <div className={styles.CardsContainer}>
          {dummyCards.map((card) => (
            <SpeedDialCard
              name={card.name}
              link={card.link}
              iconSrc={card.iconSrc}
              className={styles.Card}
              key={card.name}
            />
          ))}
          <AddSpeedDial className={styles.Card} />
        </div>
      )}
    </div>
  );
};
