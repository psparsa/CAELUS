import React from 'react';
import * as styles from './Search.module.css';
import SearchIcon from '../../assets/search.svg';

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  const [keyword, setKeyword] = React.useState('');

  const moveToGoogleResult = () => {
    if (keyword.length > 0)
      Reflect.set(
        window.location,
        'href',
        `https://www.google.com/search?q=${keyword}`
      );
  };

  return (
    <div className={styles.Search + ' ' + className ?? ''}>
      <input
        type="text"
        maxLength={50}
        placeholder="What do you wanna know?"
        className={styles.Input}
        onChange={(event) => setKeyword(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') moveToGoogleResult();
        }}
      />
      <button className={styles.BTN} onClick={moveToGoogleResult}>
        <SearchIcon />
      </button>
    </div>
  );
};
