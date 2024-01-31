import React from 'react';
import { cc } from '../../utils/combineClassNames';
import { AddSpeedDial } from '../AddSpeedDial/AddSpeedDial';
import { SpeedDialCard } from '../SpeedDialCard/SpeedDialCard';
import * as styles from './SpeedDial.module.css';
import { SpeedDialFormModal } from '../SpeedDialFormModal';

interface SpeedDialProps {
  className?: string;
}

type SpeedDialItem = { name: string; link: string };

const LOCAL_STORAGE_KEY = 'speed-dial-items';
export const SpeedDial = ({ className }: SpeedDialProps) => {
  const [items, setItems] = React.useState<SpeedDialItem[]>([]);
  const [isFormVisible, setIsFormVisible] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setItems(
      JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]'
      ) as SpeedDialItem[]
    );

    const getExpandStatus = () => {
      const x = window.localStorage.getItem('expanded') ?? 'false';
      return x === 'true';
    };

    setIsExpanded(getExpandStatus());
  }, []);

  const handleToggle = () =>
    setIsExpanded((previousState) => {
      window.localStorage.setItem('expanded', String(!previousState));
      return !previousState;
    });

  const handleAddItem = (data: SpeedDialItem) => {
    const isDuplicate = !!items.find((item) => item.link === data.link);

    if (!isDuplicate) {
      const updatedItems = [...items, data];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
      setItems(updatedItems);
    }

    setIsFormVisible(false);
  };

  const handleDeleteItem = (link: string) => {
    const updatedItems = items.filter((item) => item.link !== link);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <>
      <SpeedDialFormModal
        open={isFormVisible}
        onClose={() => setIsFormVisible(false)}
        onSave={handleAddItem}
      />
      <div className={cc([className, styles.SpeedDial])}>
        <div className={styles.SuggestionsTogglerContainer}>
          <div className={styles.SuggestionsToggler} onClick={handleToggle}>
            <div>{isExpanded ? 'Hide' : 'Show'} Suggestions</div>
            <img
              src={isExpanded ? '/arrow-up.svg' : '/arrow-down.svg'}
              className={styles.ToggerIcon}
            />
          </div>
        </div>
        {isExpanded && (
          <div className={styles.CardsContainer}>
            {items.map((card) => (
              <SpeedDialCard
                key={card.link}
                onDelete={handleDeleteItem}
                name={card.name}
                link={card.link}
                className={styles.Card}
              />
            ))}
            <AddSpeedDial
              onClick={() => setIsFormVisible(true)}
              className={styles.Card}
            />
          </div>
        )}
      </div>
    </>
  );
};
