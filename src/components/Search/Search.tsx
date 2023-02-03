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

  const clearInput = () => setKeyword('');

  return (
    <div className={styles.Search + ' ' + className ?? ''}>
      <input
        type="text"
        maxLength={50}
        placeholder="What do you wanna know?"
        className={styles.Input}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') moveToGoogleResult();
        }}
      />
      {keyword.length > 0 && (
        <div className={styles.Clear} onClick={clearInput}>
          X
        </div>
      )}
      <button className={styles.BTN} onClick={moveToGoogleResult}>
        <SearchIcon />
      </button>
    </div>
  );
};
