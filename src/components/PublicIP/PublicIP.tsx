import React from 'react';
import { getIP } from '../../api/getIP';
import * as styles from './PublicIP.module.css';

export const PublicIP = () => {
  const [state, setState] = React.useState<
    | {
        ip: string;
        flagSrc: string;
      }
    | undefined
  >(undefined);

  const updateIP = () =>
    getIP()
      .then((res) => {
        setState({ ip: res.ip_address, flagSrc: res.flag.svg });
      })
      .catch(console.error);

  React.useEffect(() => {
    updateIP();
    window.addEventListener('focus', updateIP);
    return () => window.removeEventListener('focus', updateIP);
  }, []);

  if (state === undefined) return <></>;
  return (
    <div className={styles.PublicIP}>
      <p>Public IP: {state.ip}</p>
      <img src={state.flagSrc} className={styles.Flag}></img>
    </div>
  );
};
