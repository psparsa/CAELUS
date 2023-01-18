import React from "react";
import { getIP } from "../../api/getIP";
import * as styles from "./PublicIP.module.css";

export const PublicIP = () => {
  const [state, setState] = React.useState<
    | {
        ip: string;
        flagEmoji: string;
      }
    | undefined
  >(undefined);

  const updateIP = () =>
    getIP()
      .then((res) => {
        setState({ ip: res.ip_address, flagEmoji: res.flag.emoji });
        console.log({ ip: res.ip_address, flagEmoji: res.flag.emoji });
      })
      .catch(console.error);

  React.useEffect(() => {
    updateIP();
    window.addEventListener("focus", updateIP);
    return () => window.removeEventListener("focus", updateIP);
  }, []);

  if (state === undefined) return <></>;
  return (
    <div className={styles.PublicIP}>
      <p>Public IP: {state.ip}</p>
      <p className={styles.Flag}>{state.flagEmoji}</p>
    </div>
  );
};
