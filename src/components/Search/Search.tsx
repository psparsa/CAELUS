import React from "react";
import * as styles from "./Search.module.css";
import SearchIcon from "../../assets/search.svg";

interface SearchProps {
  className?: string;
}

export const Search = ({ className }: SearchProps) => {
  return (
    <div className={styles.Search + " " + className ?? ""}>
      <input
        type="text"
        maxLength={50}
        placeholder="What do you wanna know?"
        className={styles.Input}
      />
      <button className={styles.BTN}>
        <SearchIcon />
      </button>
    </div>
  );
};
