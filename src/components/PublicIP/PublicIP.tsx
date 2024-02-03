import React from 'react';
import { networkServices } from '../../api/services/network';
import * as styles from './PublicIP.module.css';

export const PublicIP = () => {
  const [state, setState] = React.useState<
    | {
        ip: string;
        countryFlagSrc: string;
      }
    | undefined
  >(undefined);

  const updateIP = () =>
    networkServices.getIP().then(setState).catch(console.error);

  React.useEffect(() => {
    updateIP();
    window.addEventListener('focus', updateIP);
    return () => window.removeEventListener('focus', updateIP);
  }, []);

  if (state === undefined) return <></>;
  return (
    <div className={styles.PublicIP}>
      <p>Public IP: {state.ip}</p>
      <img src={state.countryFlagSrc} className={styles.Flag}></img>
    </div>
  );
};
