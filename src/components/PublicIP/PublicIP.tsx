import React from "react";
import * as styles from "./PublicIP.module.css";

interface PublicIPProps {
  ip: string;
  flagEmoji: string;
}

export const PublicIP = ({ ip, flagEmoji }: PublicIPProps) => {
  return (
    <div className={styles.PublicIP}>
      <p>Public IP: {ip}</p>
      <p className={styles.Flag}>{flagEmoji}</p>
    </div>
  );
};
